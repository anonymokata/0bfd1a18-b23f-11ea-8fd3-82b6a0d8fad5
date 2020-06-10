// As a writer
// I want to be able to erase previously written text
// so that I can remove my mistakes

import Paper from './Paper';
import Pencil from './Pencil';

// overflowing edit turns into append
describe('The ability for a pencil to edit', () => {
    it('replaces space or newline characters with given text ', () => {
        const page = new Paper();
        const pencil = new Pencil(200, 10, 50);

        pencil.writeOnPaper('    \n     ', page);
        pencil.editPaper(3, 'apple', page);

        expect(page.getPageContents()).toBe('   apple  ');
    });
    it('replaces overlapping characters with an @ symbol', () => {
        const page = new Paper();
        const pencil = new Pencil(200, 10, 50);

        pencil.writeOnPaper('codekata', page);
        pencil.editPaper(0, 'conflict', page);

        expect(page.getPageContents()).toBe('@@@@@@@@');
    });
    it("if an edit overflows the page's initial content, the content is extended", () => {
        const page = new Paper();
        const pencil = new Pencil(200, 10, 50);

        pencil.writeOnPaper('code', page);
        pencil.editPaper(0, 'overflow', page);

        expect(page.getPageContents()).toBe('@@@@flow');
    });
    it("throws an error if an edit is attempted where there's no text", () => {
        const page = new Paper();
        const pencil = new Pencil(200, 10, 50);

        const badIndex = () => {
            pencil.editPaper(5, 'dog', page);
        };

        expect(badIndex).toThrowError();
    });
});
