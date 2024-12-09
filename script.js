const container = document.querySelector('.grid-container');


function makeContainer(size) {
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-items');
        container.appendChild(gridItem);
        gridItem.addEventListener('mouseover', () => {
            let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
            gridItem.style.backgroundColor = randomColor;
        })
    }
}

makeContainer(16);

const btnSize = document.querySelector('#btn-size');
const btnClear = document.querySelector('#btn-clear');

btnSize.addEventListener('click', (size) => {
    container.innerHTML = '';
    size = prompt("Enter number 2 to 100: ");
    (0 < size && size <= 100) ? makeContainer(size): 
    (makeContainer(16), alert("Only type values between 1 to 100"));
})

btnClear.addEventListener('click', () => {
    container.innerHTML = '';
    makeContainer(16);
})