import Paper from './Paper';

export default class Pencil {
    constructor(private durability: number) {}

    private charIsUpper(char: string): boolean {
        return char.toUpperCase() === char;
    }

    getDurability(): number {
        return this.durability;
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
}
