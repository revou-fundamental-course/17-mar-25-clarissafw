document.addEventListener('DOMContentLoaded', () => {
    const squareBtn = document.querySelector('.btn-square');
    const rectangleBtn = document.querySelector('.btn-rectangle');

    const squareSection = document.querySelector('.calculation.square');
    const rectangleSection = document.querySelector('.calculation.rectangle');

    squareBtn.addEventListener('click', () => {
        console.log('Square Button Clicked');
        squareBtn.classList.add('active');
        rectangleBtn.classList.remove('active');

        squareSection.classList.add('active');
        rectangleSection.classList.remove('active');
    });

    rectangleBtn.addEventListener('click', () => {
        console.log('Rectangle Button Clicked');
        rectangleBtn.classList.add('active');
        squareBtn.classList.remove('active');

        rectangleSection.classList.add('active');
        squareSection.classList.remove('active');
    });
});

// Section AREA SQUARE
// Elements selection
const sideInputArea = document.getElementById('side-value-area');
const resultSectionArea = document.getElementById('result-section-area');
const resultValueArea = document.getElementById('result-value-area');

const calculationStepArea = document.querySelector('.calculation-step-area');
const calculateButtonArea = document.querySelector('.calculate-button.area');
const resetButtonArea = document.querySelector('.reset-button.area');

// Calculate Area Function
calculateButtonArea.addEventListener('click', () => {
    const side = Number(sideInputArea.value);

    if (side > 0) {
        const area = side * side;
        resultValueArea.textContent = area;
        calculationStepArea.textContent = `A = ${side} x ${side}`;

        resultSectionArea.style.display = 'flex';
    } else {
        resultSectionArea.style.display = 'none';
        alert('Enter side value with number starting from 1.');
    }
});

// Reset Button Function
resetButtonArea.addEventListener('click', () => {
    sideInputArea.value = '';
    resultSectionArea.style.display = 'none';
});

// SECTION PERIMETER SQUARE 
// Elements selection
const perimeterInput = document.getElementById('side-value-perimeter');
const calculatePerimeterBtn = document.querySelector('.calculate-button.perimeter');
const resetPerimeterBtn = document.querySelector('.reset-button.perimeter');

const resultSectionPerimeter = document.getElementById('result-section-perimeter');
const calculationStepPerimeter = document.getElementById('calculation-step-perimeter');
const resultValuePerimeter = document.getElementById('result-value-perimeter');

// Calculate Perimeter Function
calculatePerimeterBtn.addEventListener('click', () => {
    const sideValue = parseFloat(perimeterInput.value);

    if (!isNaN(sideValue) && sideValue > 0) {
        const perimeter = 4 * sideValue;

        calculationStepPerimeter.textContent = `P = 4 x ${sideValue}`;
        resultValuePerimeter.textContent = perimeter;

        resultSectionPerimeter.style.display = 'block';
    } else {
        resultSectionPerimeter.style.display = 'none';
        alert('Enter side value with number starting from 1.');
    }
});

// Reset Button Function
resetPerimeterBtn.addEventListener('click', () => {
    perimeterInput.value = '';
    resultSectionPerimeter.style.display = 'none';
});