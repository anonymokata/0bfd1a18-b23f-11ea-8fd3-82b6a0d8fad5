import Pencil from './Pencil';
import Paper from './Paper';

// As a writer
// I want to be able to erase previously written text
// so that I can remove my mistakes
describe('The eraser portion of the pencil class', () => {
    describe('the erase method', () => {
        it('erases the last instance of a word on a page', () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100);

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
            const pencil = new Pencil(100, 100);

            pencil.writeOnPaper('H e l\nl o', page);
            pencil.eraseFromPaper(' ', page);
            pencil.eraseFromPaper(' ', page);
            pencil.eraseFromPaper(' ', page);
            expect(page.getPageContents()).toBe('Hel\nlo');

            pencil.eraseFromPaper('\n', page);
            expect(page.getPageContents()).toBe('Hello');
        });
        it("alters nothing if the specified set of characters don't exist on the page", () => {
            const page = new Paper();
            const pencil = new Pencil(100, 100);

            pencil.writeOnPaper('Testing Testing 123', page);
            pencil.eraseFromPaper('Hey there', page);
            expect(page.getPageContents()).toBe('Testing Testing 123');
        });
    });
});
