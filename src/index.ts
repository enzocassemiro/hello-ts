const MAIN = document.querySelector('main');

let countNumber: number = 0

window.addEventListener('load', (): void => {
    document.title = 'Hello TS!';
    renderCounter();
    createButtons();
})

function renderCounter(): void {
    
    const counterNumber: any = document.createElement('h2');
    
    counterNumber.classList.add('counter__number')
    
    counterNumber.textContent = countNumber;
    
    MAIN?.appendChild(counterNumber);
}

function changeCounter(): void {
    const counterNumber: any = document.querySelector('.counter__number');
    counterNumber.textContent = countNumber;
    document.title = `(${countNumber}) Hello TS!`;
}

function createButtons(): void {
    const divButtons = document.createElement('div');
    const buttonAdd = document.createElement('button');
    const buttonReset = document.createElement('button');

    divButtons.classList.add('buttons')
    buttonAdd.classList.add('button__add')
    buttonReset.classList.add('button__reset')
    
    buttonAdd.textContent = 'Add';
    buttonReset.textContent = 'Reset';

    buttonAdd.addEventListener('click', (): void => {        
        countNumber += 1
        changeCounter();
    })
    
    buttonReset.addEventListener('click', (): void => {        
        countNumber = 0
        changeCounter();
    })

    divButtons?.appendChild(buttonAdd);
    divButtons?.appendChild(buttonReset);
    MAIN?.appendChild(divButtons);
}