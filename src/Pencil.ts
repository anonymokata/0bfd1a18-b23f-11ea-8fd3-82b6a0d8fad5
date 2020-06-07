import Paper from './Paper';

import { charIsUpper, charIsWhitespace } from './Helpers';

export default class Pencil {
    private initialDurability: number;
    private durability: number;
    private length: number;

    constructor(durability: number, length: number) {
        if (durability < 0) throw new Error('NegativeDurability');
        if (length < 0) throw new Error('NegativeLength');
        this.initialDurability = durability;
        this.durability = durability;
        this.length = length;
    }

    sharpen(): void {
        if (this.length > 0) {
            this.durability = this.initialDurability;
            this.length--;
        }
    }

    private useDurabilityToWrite(char: string, page: Paper, i?: number): void {
        if (charIsWhitespace(char)) page.write(char, i);
        else if (charIsUpper(char) && this.durability >= 2) {
            this.durability -= 2;
            page.write(char, i);
        } else if (this.durability >= 1) {
            this.durability--;
            page.write(char, i);
        } else page.write(' ');
    }

    writeOnPaper(text: string, page: Paper): void {
        text.split('').forEach((char) => {
            this.useDurabilityToWrite(char, page);
        });
    }

    editPaper(index: number, text: string, page: Paper): void {
        text.split('').forEach((char, i) => {
            this.useDurabilityToWrite(char, page, i + index);
        });
    }

    getDurability(): number {
        return this.durability;
    }

    getLength(): number {
        return this.length;
    }
}
