import Pencil from './Pencil';
import Paper from './Paper';

// As a writer
// I want to be able to erase previously written text
// so that I can remove my mistakes
describe('The eraser portion of the pencil class', () => {
    describe('the erase method', () => {
        it('erases the last instance of a word on a page', () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100, 20);

            pencil.writeOnPaper(
                'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
                page,
            );
            pencil.eraseFromPaper('chuck', page);
            expect(page.getPageContents()).toBe(
                'How much wood would a woodchuck chuck if a woodchuck could       wood?',
            );

            pencil.eraseFromPaper('chuck', page);

            expect(page.getPageContents()).toBe(
                'How much wood would a woodchuck chuck if a wood      could       wood?',
            );
        });
        it('can erase space and newline characters', () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100, 20);

            pencil.writeOnPaper('H-e-l\nl-o', page);
            pencil.eraseFromPaper('-', page);
            pencil.eraseFromPaper('-', page);
            pencil.eraseFromPaper('-', page);
            expect(page.getPageContents()).toBe('H e l\nl o');

            pencil.eraseFromPaper('\n', page);
            expect(page.getPageContents()).toBe('H e l l o');
        });
        it("alters nothing if the specified set of characters don't exist on the page", () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100, 20);

            pencil.writeOnPaper('Testing Testing 123', page);
            pencil.eraseFromPaper('Hey there', page);
            expect(page.getPageContents()).toBe('Testing Testing 123');
        });
    });

    // As a pencil manufacturer
    // I want a pencil eraser to eventually wear out
    // so that I can sell more pencils
    describe('Eraser durability', () => {
        it("doesn't spend eraser durability when erasing whitespaces", () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100, 30);

            expect(pencil.getEraserDurability()).toBe(30);
            pencil.writeOnPaper('Buffalo Bill', page);
            pencil.eraseFromPaper('o Bill', page);
            expect(pencil.getEraserDurability()).toBe(25);
            expect(page.getPageContents()).toBe('Buffal      ');
        });
        it('Erases in the opposite order in which it was written', () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100, 30);

            expect(pencil.getEraserDurability()).toBe(30);

            pencil.writeOnPaper('Kata Code Kata', page);
            pencil.eraseFromPaper('Kata', page);
            expect(pencil.getEraserDurability()).toBe(26);
            expect(page.getPageContents()).toBe('Kata Code     ');

            pencil.eraseFromPaper('Kata', page);
            expect(pencil.getEraserDurability()).toBe(22);
            expect(page.getPageContents()).toBe('     Code     ');
        });
    });
});
