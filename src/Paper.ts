import clear from 'clear';
import chalk from 'chalk';

export default class Paper {
    private writtenText: string;

    constructor() {
        this.writtenText = '';
    }

    getWrittenText(): string {
        return this.writtenText;
    }

    setWrittenText(newText: string): void {
        this.writtenText = newText;
    }

    printPaper(): void {
        clear();
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
