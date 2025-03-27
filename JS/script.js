// Navbar Square or Rectangle

const squareBtn = document.querySelector('.btn-square');
const rectangleBtn = document.querySelector('.btn-rectangle');

squareBtn.addEventListener('click', () => {
    squareBtn.classList.add('active');
    rectangleBtn.classList.remove('active');
});

rectangleBtn.addEventListener('click', () => {
    rectangleBtn.classList.add('active');
    squareBtn.classList.remove('active');
});

// TOGGLE AREA OR PERIMETER

const areaButton = document.querySelector('.area-button');
const perimeterButton = document.querySelector('.perimeter-button');

// Ambil elemen section
const areaSection = document.querySelector('.description-section.area');
const perimeterSection = document.querySelector('.description-section.perimeter');

// Event Listener untuk tombol Area
areaButton.addEventListener('click', () => {
    areaSection.style.display = 'block';
    perimeterSection.style.display = 'none';

    areaButton.classList.add('active');
    perimeterButton.classList.remove('active');
});

// Event Listener untuk tombol Perimeter
perimeterButton.addEventListener('click', () => {
    areaSection.style.display = 'none';
    perimeterSection.style.display = 'block';

    perimeterButton.classList.add('active');
    areaButton.classList.remove('active');
});


// Section AREA SQUARE

const sideInput = document.getElementById('side-value area');
const calculateBtn = document.querySelector('.calculate-button.area');
const resetBtn = document.querySelector('.reset-button.area');

const resultSection = document.getElementById('result-section-area');
const resultCard = document.querySelector('.result-card.area');
const calculationStep = document.querySelector('.calculation-step-area');
const resultValue = document.getElementById('result-value-area');

calculateBtn.addEventListener('click', () => {
    const sideValue = parseFloat(sideInput.value);

    if (!isNaN(sideValue) && sideValue > 0) {
        const area = sideValue * sideValue;
        
        calculationStep.textContent = `A = ${sideValue} x ${sideValue}`;
        resultValue.textContent = area;

        resultSection.style.display = 'block';
        resultCard.style.display = 'block';
    } else {
        alert('Enter side value with number start from 1.');
    }
});

    // Reset Form
    resetBtn.addEventListener('click', () => {
        sideInput.value = '';
        resultSection.style.display = 'none';
        resultCard.style.display = 'none';
    });

// SECTION PERIMETER SQUARE 

const perimeterInput = document.getElementById('side-value-perimeter');
const calculatePerimeterBtn = document.getElementById('calculate-perimeter');
const resetPerimeterBtn = document.getElementById('reset-perimeter');

const resultSectionPerimeter = document.getElementById('result-section-parameter');
const calculationStepPerimeter = document.getElementById('calculation-step-perimeter');
const resultValuePerimeter = document.getElementById('result-value-parameter');

// Hitung Keliling Persegi
calculatePerimeterBtn.addEventListener('click', () => {
    const sideValue = parseFloat(perimeterInput.value);

    if (!isNaN(sideValue) && sideValue > 0) {
        const perimeter = 4 * sideValue;

        calculationStepPerimeter.textContent = `P = 4 x ${sideValue}`;
        resultValuePerimeter.textContent = perimeter;

        resultSectionPerimeter.style.display = 'block';
    } else {
        alert('Masukkan nilai sisi yang valid (angka positif).');
    }
});

// Reset Form Perimeter
resetPerimeterBtn.addEventListener('click', () => {
    perimeterInput.value = '';
    resultSectionPerimeter.style.display = 'none';
});