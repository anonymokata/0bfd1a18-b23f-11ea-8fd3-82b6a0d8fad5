import Pencil from './Pencil';
import Paper from './Paper';

describe('The pencil class', () => {
    describe('writes a given message a given paper', () => {
        it('by utilizing Paper.write()', () => {
            const page = new Paper();
            const pencil = new Pencil();
            page.write = jest.fn();
            expect(page.getPageContents()).toBe('');

            pencil.writeOnPaper('Hi!', page);
            expect(page.write).toHaveBeenCalledTimes(1);
            expect(page.write).toHaveBeenCalledWith('Hi!');
            expect(page.getPageContents()).toBe('Hi!');

            pencil.writeOnPaper(' Hello.', page);
            expect(page.write).toHaveBeenCalledTimes(2);
            expect(page.write).toHaveBeenCalledWith(' Hello.');
            expect(page.getPageContents()).toBe('Hi! Hello.');
        });
    });
});
