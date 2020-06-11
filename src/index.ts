import Paper from './Paper';
import Pencil from './Pencil';
import clear from 'clear';
import * as readline from 'readline-sync';

let activePencil = new Pencil(15, 2, 20);
let activePaper = new Paper();
let choosenPencilDurability = 0;
let choosenPencilLength = 0;
let choosenEraserDurability = 0;
let input = 1;

clear();

// prettier-ignore
const ascii =    " _____                _ _   _  __     _        "+ "\n" +
    "|  __ \\              (_) | | |/ /    | |       "+ "\n" +
    "| |__) |__  ___   ___ _| | | ' / __ _| |_ __ _ "+ "\n" +
    "|  ___/ _ \\  _ \\ / __| | | |  < / _  | __/ _  |"+ "\n" +
    "| |  |  __/ | | | (__| | | | . \\ (_| | || (_| |"+ "\n" +
    "|_|   \\___|_| |_|\\___|_|_| |_|\\_\\__,_|\\__\\__,_|"

const pencilStats = (pencil: Pencil): string =>
    `Stats of your current Pencil:\nPencil Durability: ${pencil.getPencilDurability()} Length: ${pencil.getPencilLength()} Eraser Durability: ${pencil.getEraserDurability()}`;

const createNewPencil = (): void => {
    console.log('-- Enter positive numbers or an exception will be thrown --');
    choosenPencilDurability = getNumInput(
        'Enter a durability for this pencil: ',
    );
    choosenPencilLength = getNumInput('Enter a length for this pencil: ');
    choosenEraserDurability = getNumInput(
        'Enter an eraser durability for this pencil: ',
    );
    // ask about 3 params + getTxtInput
    activePencil = new Pencil(
        choosenPencilDurability,
        choosenPencilLength,
        choosenEraserDurability,
    );
};

const createNewPage = (): void => {
    activePaper = new Paper();
};

const writeText = (): void => {
    const toWrite = getTxtInput('What would you like to write: ');
    activePencil.writeOnPaper(toWrite, activePaper);
};

const eraseText = (): void => {
    const toErase = getTxtInput('What would you like to erase: ');
    activePencil.eraseFromPaper(toErase, activePaper);
};

const getNumInput = (question: string): number => {
    return parseInt(readline.question(question));
};

const getTxtInput = (question: string): string => {
    return readline.question(question);
};

while (input !== 0) {
    console.log(ascii + '\n');

    console.log(pencilStats(activePencil));

    activePaper.showPaper();

    console.log('Options:');
    console.log('Enter 1 to create a new pencil for use in writing.');
    console.log('Enter 2 to get new piece of paper.');
    console.log('Enter 3 to sharpen pencil.');
    console.log('Enter 4 to write.');
    console.log('Enter 5 to erase.');
    console.log('Enter 6 to edit.');
    console.log('Enter 0 to quit.\n');

    input = getNumInput('Choose: ');

    switch (input) {
        case 1:
            createNewPencil();
            break;
        case 2:
            createNewPage();
            break;
        case 3:
            activePencil.sharpen();
            break;
        case 4:
            writeText();
            break;
        case 5:
            eraseText();
            break;
        case 6:
            const editIndex = getNumInput(
                'What index of the paper would you like to edit at: ',
            );
            const toWrite = getTxtInput('What text would you like to write: ');
            activePencil.editPaper(editIndex, toWrite, activePaper);
        default:
    }

    clear();
}
