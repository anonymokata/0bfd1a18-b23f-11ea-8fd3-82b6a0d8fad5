import Pencil from './Pencil';
import Paper from './Paper';

describe('The pencil class', () => {
    // As a writer
    // I want to be able use a pencil to write text on a sheet of paper
    // so that I can better remember my thoughts
    describe('can write a message on a given paper', () => {
        it('by utilizing Paper.write()', () => {
            const page = new Paper();
            const pencil = new Pencil();
            page.write = jest.fn();
            expect(page.getPageContents()).toBe('');

            pencil.writeOnPaper('Hi!', page);
            expect(page.write).toHaveBeenCalledTimes(1);
            expect(page.write).toHaveBeenCalledWith('Hi!');

            pencil.writeOnPaper(' Hello.', page);
            expect(page.write).toHaveBeenCalledTimes(2);
            expect(page.write).toHaveBeenCalledWith(' Hello.');
        });

        it('writing is persisted to the page', () => {
            const page = new Paper();
            const pencil = new Pencil();

            pencil.writeOnPaper('Hi!', page);
            expect(page.getPageContents()).toBe('Hi!');
            pencil.writeOnPaper(' Hello.', page);
            expect(page.getPageContents()).toBe('Hi! Hello.');
        });
    });

    // As a pencil manufacturer
    // I want writing to cause a pencil point to go dull
    // so that I can sell more pencils
    describe('point degradation', () => {
        it('Costs 2 durability to write a capital letter', () => {
            const page = new Paper();
            const pencil = new Pencil(3);

            pencil.writeOnPaper('Hello', page);
            expect(page.getPageContents()).toBe('He   ');
        });
        it('Costs 1 durability to write a lowercase letter', () => {
            const page = new Paper();
            const pencil = new Pencil(3);

            pencil.writeOnPaper('hello', page);
            expect(page.getPageContents()).toBe('hel  ');
        });
        it("Doesn't waste point durability on spaces", () => {
            const page = new Paper();
            const pencil = new Pencil(3);

            pencil.writeOnPaper('   Hey!   ', page);
            expect(page.getPageContents()).toBe('   He     ');
        });
        it("Doesn't waste point durability on newline characters", () => {
            const page = new Paper();
            const pencil = new Pencil(3);

            pencil.writeOnPaper('\nHey!\n', page);
            expect(page.getPageContents()).toBe('\nHe  \n');
        });
    });
});
