/**
 * Renders a table from a 2D array of arrays.
 * Each entry in the nested arrays becomes the text in a cell.
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */

export const gameBoard = (arrayOfArrays) => {
    const table = document.createElement('table');

    for (const rowArray of arrayOfArrays) {
        const row = document.createElement('tr');

        for (const cellValue of rowArray) {
            const cell = document.createElement('td');
            cell.textContent = cellValue;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
};
