import chalk from 'chalk';

import { charIsWhitespace } from './Helpers';

export default class Paper {
    private writtenText: string;

    constructor() {
        this.writtenText = '';
    }

    getPageContents(): string {
        return this.writtenText;
    }

    write(newChar: string, index?: number): void {
        if (index === undefined) this.writtenText += newChar;
        else {
            const arr = this.writtenText.split('');
            if (index > arr.length) throw new Error('OutOfBoundsEdit');
            else if (index === arr.length) arr.push(newChar);
            else if (!charIsWhitespace(arr[index])) arr[index] = '@';
            else arr[index] = newChar;

            this.writtenText = arr.join('');
        }
    }

    erase(textToRemove: string): void {
        const match = this.writtenText.lastIndexOf(textToRemove);
        if (match >= 0) {
            const removalIndex = {
                endOfFront: match,
                startOfBack: match + textToRemove.length,
            };
            const whiteSpace = ' '.repeat(textToRemove.length);
            this.writtenText =
                this.writtenText.substring(0, removalIndex.endOfFront) +
                whiteSpace +
                this.writtenText.substring(removalIndex.startOfBack);
        }
    }

    showPaper(): void {
        console.log('\n' + this.paperColor(this.formatStrings.top));
        console.log(this.writtenText);
        console.log(this.paperColor(this.formatStrings.end) + '\n');
    }

    private paperColor = chalk.bgWhite.black;

    private formatStrings = {
        top: ' ----------------- Top of Page ----------------- ',
        end: ' ----------------- End of Page ----------------- ',
    };
}
