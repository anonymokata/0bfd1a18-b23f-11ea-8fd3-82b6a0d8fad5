## ✏️Pencil Durability Kata - [Live Demo (Repl.it)](https://pencil-kata.bmitchinson.repl.run)

Thank you for your time reviewing this submission. Any and all feedback is
appreciated.

### Project Layout

All source code is stored in `/src` alongside each respective testing file.
Compiled typescript will be placed in `/dist`, and can be ignored. All other
files in the root directory are purely configuration files for linting,
testing, and typescript.

Links any travis integration results have been removed in an effort
to stay anonymous, as instructed.

_Note: In this implementation, I've assumed that newline characters are considered "white space"_

### Running Locally

_Note: An online demo has been created for this repository, and is [available here.](https://pencil-kata.bmitchinson.repl.run) There you are able to use the entire application, without setup._

All dependencies are managed by npm in the `package.json` file, and can be
downloaded to the project by using `npm install` in the root directory.

The solution was developed using node 14.4.0, but 12.18.0 (erbium)
was tested to work as well. If on Mac or Linux, I recommend using
[nvm](https://github.com/nvm-sh/nvm) to install either of these versions.

### Commands to run

To run the demo, use `npm run demo`, after the aforementioned `npm install`.
To run all Jest tests + generate coverage use `npm run test`.

---

Additional options are listed in the `package.json` and include:

-   `npm run test` - .
-   `npm run clean` - Removes lingering source map + coverage files. Please run
    this in-between generating new coverage reports / making code alterations.
-   `npm run lint` - Validates code is linted.
-   `npm run view:cov` - Serves a copy of the existing coverage report to explore in your browser.
