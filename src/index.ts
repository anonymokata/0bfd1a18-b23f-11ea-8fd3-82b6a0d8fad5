import clear from 'clear';
import Paper from './Paper';
import Pencil from './Pencil';

const page = new Paper();
const pencil = new Pencil(5);

clear();
page.showPaper();
pencil.writeOnPaper('Hello!', page);
page.showPaper();
pencil.writeOnPaper('Hi there', page);
const pencil_two = new Pencil(10);
pencil_two.writeOnPaper('back again', page);
page.showPaper();
