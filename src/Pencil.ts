import Paper from './Paper';

import { charIsUpper, charIsWhitespace } from './Helpers';

export default class Pencil {
    private initialPencilDurability: number;
    private pencilDurability: number;
    private eraserDurability: number;
    private pencilLength: number;

    constructor(
        pencilDurability: number,
        pencilLength: number,
        eraserDurability: number,
    ) {
        if (pencilDurability < 0) throw new Error('NegativePencilDurability');
        if (pencilLength < 0) throw new Error('NegativePencilLength');
        if (eraserDurability < 0) throw new Error('NegativeEraserDurability');
        this.initialPencilDurability = pencilDurability;
        this.pencilDurability = pencilDurability;
        this.pencilLength = pencilLength;
        this.eraserDurability = eraserDurability;
    }

    sharpen(): void {
        if (this.pencilLength > 0) {
            this.pencilDurability = this.initialPencilDurability;
            this.pencilLength--;
        }
    }

    private useDurabilityToWrite(char: string, paper: Paper, i?: number): void {
        if (charIsWhitespace(char)) paper.write(char, i);
        else if (charIsUpper(char) && this.pencilDurability >= 2) {
            this.pencilDurability -= 2;
            paper.write(char, i);
        } else if (this.pencilDurability >= 1) {
            this.pencilDurability--;
            paper.write(char, i);
        } else paper.write(' ');
    }

    writeOnPaper(text: string, paper: Paper): void {
        text.split('').forEach((char) => {
            this.useDurabilityToWrite(char, paper);
        });
    }

    editPaper(index: number, text: string, paper: Paper): void {
        text.split('').forEach((char, i) => {
            this.useDurabilityToWrite(char, paper, i + index);
        });
    }

    eraseFromPaper(requestedTxtToRemove: string, paper: Paper): void {
        const attemptedRemovalLength = requestedTxtToRemove.replace(/\s/g, '')
            .length;
        const txtAbleToBeErased = requestedTxtToRemove.substring(
            attemptedRemovalLength - this.eraserDurability,
        );
        paper.erase(txtAbleToBeErased);
        this.eraserDurability -= txtAbleToBeErased.replace(/\s/g, '').length;
    }

    getPencilDurability(): number {
        return this.pencilDurability;
    }

    getPencilLength(): number {
        return this.pencilLength;
    }

    getEraserDurability(): number {
        return this.eraserDurability;
    }
}
