const body = document.querySelector('body');
const container = document.querySelector('.container');
const gridBtn = document.querySelector('button'); 
let total = 16;

function createGrid () {
  container.innerHTML = ''

  const rowsNum = total;
  const colsNum = total;
  const cellWidth = 500/colsNum;
  const cellHeight = 500/rowsNum;

  for (let i = 0; i < rowsNum; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    container.appendChild(row);

    for (let j = 0; j < colsNum; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      row.appendChild(cell);
      cell.style.width = `${cellWidth}px`
      cell.style.height = `${cellHeight}px`
      cell.style.opacity = '0'
      
      function randomColor () {
        const randomRed = Math.floor(Math.random() * 255)
        const randomGreen = Math.floor(Math.random() * 255)
        const randomBlue = Math.floor(Math.random() * 255)
        cell.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

        let opacity = parseFloat(cell.style.opacity);
        if (opacity < 1) {
          opacity += 0.1;
        }
        cell.style.opacity = opacity
      }

      cell.addEventListener('mouseover', randomColor);
    }
  }
};

function getUserGrid () {
  const userInput = prompt('Enter the desired number of squares on each side. MAX: 100')
  const newSize = Number(userInput);
  if (newSize > 100 || isNaN(newSize)) {
    alert('Please enter a number of 100 or less')
  } else {
    total = newSize;
    createGrid();
  }
};

gridBtn.addEventListener('click', getUserGrid)

createGrid();