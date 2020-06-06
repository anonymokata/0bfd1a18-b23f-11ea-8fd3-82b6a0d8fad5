import Paper from './Paper';

describe('The paper object', () => {
    it('Contains an empty string upon initialization', () => {
        const page = new Paper();
        expect(page.getWrittenText()).toBe('');
    });

    describe('printing sequence', () => {
        console.log = jest.fn();
        it("prints it's written text", () => {
            const page = new Paper();
            page.setWrittenText('Hey there');
            page.printPaper();
            expect(console.log).toHaveBeenCalledWith('Hey there');
        });
    });

    describe('writtenText property', () => {
        it('Is updated to the value given to setWrittenText', () => {
            const page = new Paper();
            page.setWrittenText('Hello!');
            expect(page.getWrittenText()).not.toBe('');
            expect(page.getWrittenText()).toBe('Hello!');
        });
    });
});
