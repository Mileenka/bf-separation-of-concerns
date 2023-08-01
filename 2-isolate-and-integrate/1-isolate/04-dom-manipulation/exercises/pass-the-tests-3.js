'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
const tbodyEl = divEl.querySelector('tbody');

// Create two rows ('tr') and four cells ('td')
for (let i = 0; i < 2; i++) {
  const trEl = document.createElement('tr');
  for (let j = 0; j < 2; j++) {
    const tdEl = document.createElement('td');
    tdEl.textContent = expectedInnerHTMLs[i * 2 + j];
    trEl.appendChild(tdEl);
  }
  tbodyEl.appendChild(trEl);
}

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

// Check if the table cells have the correct content
for (let i = 0; i < 2; i++) {
  const trEl = tbodyEl.children[i];
  for (let j = 0; j < 2; j++) {
    const tdEl = trEl.children[j];
    const actual = expectedInnerHTMLs[i * 2 + j]; // Corrected line
    const expected = expectedInnerHTMLs[i * 2 + j];
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
