import Paper from './Paper';

describe('The paper class', () => {
    it('has empty contents upon initialization', () => {
        const page = new Paper();
        expect(page.getPageContents()).toBe('');
    });

    describe('printing sequence', () => {
        console.log = jest.fn();
        it("prints it's written text", () => {
            const page = new Paper();
            page.write('Hey there');
            page.showPaper();
            expect(console.log).toHaveBeenCalledWith('Hey there');
            expect(console.log).toHaveBeenCalledTimes(3);
        });
    });

    describe('contents property', () => {
        it('is appended to by write()', () => {
            const page = new Paper();
            page.write('Hello!');
            expect(page.getPageContents()).not.toBe('');
            expect(page.getPageContents()).toBe('Hello!');
            page.write(' Hi.');
            expect(page.getPageContents()).toBe('Hello! Hi.');
        });
    });
});
