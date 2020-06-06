import Paper from './Paper';

describe('The paper object', () => {
    it('Contains an empty string upon initialization', () => {
        const page = new Paper();
        expect(page.text).toBe('');
    });

    describe('printing sequence', () => {
        console.log = jest.fn();
        it("prints it's text", () => {
            const page = new Paper();
            page.setText('Hey there');
            page.printText();
            expect(console.log).toHaveBeenCalledWith('Hey there');
        });
    });

    describe('writtenText property', () => {
        it('Is updated to the value given to setWrittenText', () => {
            const page = new Paper();
            page.setText('Hello!');
            expect(page.text).not.toBe('');
        });
    });
});
