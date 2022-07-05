"use strict";
const MAIN = document.querySelector('main');
let countNumber = 0;
window.addEventListener('load', () => {
    document.title = 'Hello TS!';
    renderCounter();
    createButtons();
});
function renderCounter() {
    const counterNumber = document.createElement('h2');
    counterNumber.classList.add('counter__number');
    counterNumber.textContent = countNumber;
    MAIN === null || MAIN === void 0 ? void 0 : MAIN.appendChild(counterNumber);
}
function changeCounter() {
    const counterNumber = document.querySelector('.counter__number');
    counterNumber.textContent = countNumber;
    document.title = `(${countNumber}) Hello TS!`;
}
function createButtons() {
    const divButtons = document.createElement('div');
    const buttonAdd = document.createElement('button');
    const buttonReset = document.createElement('button');
    divButtons.classList.add('buttons');
    buttonAdd.classList.add('button__add');
    buttonReset.classList.add('button__reset');
    buttonAdd.textContent = 'Add';
    buttonReset.textContent = 'Reset';
    buttonAdd.addEventListener('click', () => {
        countNumber += 1;
        changeCounter();
    });
    buttonReset.addEventListener('click', () => {
        countNumber = 0;
        changeCounter();
    });
    divButtons === null || divButtons === void 0 ? void 0 : divButtons.appendChild(buttonAdd);
    divButtons === null || divButtons === void 0 ? void 0 : divButtons.appendChild(buttonReset);
    MAIN === null || MAIN === void 0 ? void 0 : MAIN.appendChild(divButtons);
}
