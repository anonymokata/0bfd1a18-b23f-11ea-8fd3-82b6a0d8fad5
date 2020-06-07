import Paper from './Paper';

export default class Pencil {
    private initialDurability: number;

    constructor(private durability: number, private length: number) {
        this.initialDurability = durability;
    }

    private charIsUpper(char: string): boolean {
        return char.toUpperCase() === char;
    }

    sharpen(): void {
        if (this.length > 0) {
            this.durability = this.initialDurability;
            this.length--;
        }
    }

    writeOnPaper(text: string, page: Paper): void {
        text.split('').forEach((char) => {
            if (char === '\n' || char === ' ') page.write(char);
            else if (this.charIsUpper(char) && this.durability >= 2) {
                this.durability -= 2;
                page.write(char);
            } else if (this.durability >= 1) {
                this.durability--;
                page.write(char);
            } else page.write(' ');
        });
    }

    getDurability(): number {
        return this.durability;
    }

    getLength(): number {
        return this.length;
    }
}
