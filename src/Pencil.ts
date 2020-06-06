import Paper from './Paper';

export default class Pencil {
    writeOnPaper(text: string, page: Paper): void {
        page.write(text);
    }
}
