'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;

console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
// Replace the <p>
const newNavElement = document.createElement('nav');
divEl.replaceChild(newNavElement, divEl.children[0]);

// Insert something before the <section>
const newH2Element = document.createElement('h2');
const newSectionElement = divEl.getElementsByTagName('section')[0];
divEl.insertBefore(newH2Element, newSectionElement);

// Remove the <h1>
const h1El = divEl.getElementsByTagName('h1')[0];
divEl.removeChild(h1El);

// Append something to the end
const appendedElement = document.createElement('p');
divEl.appendChild(appendedElement);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');
console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
