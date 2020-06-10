import Pencil from './Pencil';
import Paper from './Paper';

describe('The pencil class', () => {
    it("doesn't accept negative numbers in it's constructor", () => {
        const negativePencilDurability = () => {
            new Pencil(-10, 4, 50);
        };

        const negativePencilLength = () => {
            new Pencil(20, -10, 50);
        };

        const negativeEraserDurability = () => {
            new Pencil(20, 10, -5);
        };

        expect(negativePencilDurability).toThrowError();
        expect(negativePencilLength).toThrowError();
        expect(negativeEraserDurability).toThrowError();
    });

    // As a writer
    // I want to be able use a pencil to write text on a sheet of paper
    // so that I can better remember my thoughts
    describe('can write a message on a given paper', () => {
        it('by utilizing Paper.write()', () => {
            const page = new Paper();
            const pencil = new Pencil(100, 1, 20);
            page.write = jest.fn();
            expect(page.getPageContents()).toBe('');

            pencil.writeOnPaper('Hi!', page);
            expect(page.write).toHaveBeenCalledTimes(3);

            pencil.writeOnPaper(' Hello.', page);
            expect(page.write).toHaveBeenCalledTimes(10);
        });

        it('writing is persisted to the page', () => {
            const page = new Paper();
            const pencil = new Pencil(100, 1, 20);

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
            const pencil = new Pencil(3, 1, 20);

            pencil.writeOnPaper('H', page);
            expect(page.getPageContents()).toBe('H');
            expect(pencil.getPencilDurability()).toBe(1);
        });
        it('Costs 1 durability to write a lowercase letter', () => {
            const page = new Paper();
            const pencil = new Pencil(3, 1, 20);

            pencil.writeOnPaper('h', page);
            expect(page.getPageContents()).toBe('h');
            expect(pencil.getPencilDurability()).toBe(2);
        });
        it("Doesn't waste point durability on spaces", () => {
            const page = new Paper();
            const pencil = new Pencil(8, 1, 20);
            expect(pencil.getPencilDurability()).toBe(8);

            pencil.writeOnPaper('\n \n \n  Pillar  \n', page);
            expect(page.getPageContents()).toBe('\n \n \n  Pillar  \n');
            expect(pencil.getPencilDurability()).toBe(1);
        });
        it("Doesn't waste point durability on newline characters", () => {
            const page = new Paper();
            const pencil = new Pencil(3, 1, 20);
            expect(pencil.getPencilDurability()).toBe(3);

            pencil.writeOnPaper('\nHey!\n', page);
            expect(page.getPageContents()).toBe('\nHe  \n');
            expect(pencil.getPencilDurability()).toBe(0);
        });
        it('Characters unable to be written are represented by spaces', () => {
            const page = new Paper();
            const pencil = new Pencil(5, 1, 20);

            pencil.writeOnPaper('   Pillar\n', page);
            expect(page.getPageContents()).toBe('   Pill  \n');
            expect(pencil.getPencilDurability()).toBe(0);
        });
    });

    // As a writer
    // I want to be able to sharpen my pencil
    // so that I can continue to write with it after it goes dull
    describe('The ability for a pencil to be sharpened', () => {
        it('restores initial durability upon sharpening', () => {
            const pencil = new Pencil(5, 1, 10);
            const page = new Paper();
            expect(pencil.getPencilDurability()).toBe(5);
            expect(pencil.getPencilLength()).toBe(1);

            pencil.writeOnPaper('hey ', page);
            expect(pencil.getPencilLength()).toBe(1);

            pencil.sharpen();
            expect(pencil.getPencilDurability()).toBe(5);
            expect(pencil.getPencilLength()).toBe(0);
        });
        it("doesn't sharpen with a length of zero", () => {
            const pencil = new Pencil(5, 2, 10);

            pencil.sharpen();
            expect(pencil.getPencilLength()).toBe(1);

            pencil.sharpen();
            expect(pencil.getPencilLength()).toBe(0);

            pencil.sharpen();
            expect(pencil.getPencilLength()).toBe(0);
        });
    });
});
