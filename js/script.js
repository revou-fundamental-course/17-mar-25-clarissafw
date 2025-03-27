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


// SECTION AREA RECTANGLE
// Elements selection
const lengthInputArea = document.getElementById('length-value-area');
const widthInputArea = document.getElementById('width-value-area');

const resultSectionAreaRectangle = document.getElementById('result-section-area-rectangle');
const calculationStepAreaRectangle = document.querySelector('.calculation-step-area-rectangle');
const resultValueAreaRectangle = document.getElementById('result-value-area-rectangle');

const calculateRectangleAreaBtn = document.querySelector('.calculate-button.rectangle-area');
const resetRectangleAreaBtn = document.querySelector('.reset-button.rectangle-area');

// Calculate Area Function
calculateRectangleAreaBtn.addEventListener('click', () => {
    const length = parseFloat(lengthInputArea.value);
    const width = parseFloat(widthInputArea.value);

    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
        const area = length * width;
        
        calculationStepAreaRectangle.textContent = `A = ${length} x ${width}`;
        resultValueAreaRectangle.textContent = area;
        
        resultSectionAreaRectangle.style.display = 'flex';
    } else {
        resultSectionAreaRectangle.style.display = 'none';
        alert('Enter valid length and width values starting from 1.');
    }
});

// Reset Button Function
resetRectangleAreaBtn.addEventListener('click', () => {
    lengthInputArea.value = '';
    widthInputArea.value = '';
    resultSectionAreaRectangle.style.display = 'none';
});



// SECTION PERIMETER RECTANGLE
// Elements selection
const lengthInput = document.getElementById('length-value-perimeter');
const widthInput = document.getElementById('width-value-perimeter');
const resultSectionPerimeterRectangle = document.getElementById('result-section-perimeter-rectangle');
const calculationStepPerimeterRectangle = document.getElementById('calculation-step-perimeter-rectangle');
const resultValuePerimeterRectangle = document.getElementById('result-value-perimeter-rectangle');

const calculateRectanglePerimeterBtn = document.querySelector('.calculate-button.rectangle-perimeter');
const resetRectanglePerimeterBtn = document.querySelector('.reset-button.rectangle-perimeter');

// Calculate Perimeter Function
calculateRectanglePerimeterBtn.addEventListener('click', () => {
    const length = Number(lengthInput.value);
    const width = Number(widthInput.value);

    if (length > 0 && width > 0) {
        const perimeter = 2 * (length + width);
        resultValuePerimeterRectangle.textContent = perimeter;
        calculationStepPerimeterRectangle.textContent = `P = 2(${length} + ${width})`;

        resultSectionPerimeterRectangle.style.display = 'flex';
    } else {
        resultSectionPerimeterRectangle.style.display = 'none';
        alert('Enter valid length and width values starting from 1.');
    }
});

// Reset Button Function
resetRectanglePerimeterBtn.addEventListener('click', () => {
    lengthInput.value = '';
    widthInput.value = '';
    resultSectionPerimeterRectangle.style.display = 'none';
});

