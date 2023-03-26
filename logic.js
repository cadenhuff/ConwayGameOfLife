const rows = 25;
const cols = 45;


const gridContainer = document.getElementById("grid");

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.gridRow = i+1
    cell.style.gridColumn = j+1;
    gridContainer.appendChild(cell);
  }
}
