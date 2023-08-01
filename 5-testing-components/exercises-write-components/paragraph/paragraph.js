// /**
//  * Render a paragraph with optional styling.
//  *
//  * @param {string} text - The paragraph text.
//  * @param {string[]} [classList=[]] - An array of classes to apply.
//  * @returns {HTMLParagraphElement} A rendered paragraph element.
//  */
//  const paragraph = (text, classList = []) => {
//     const pEl = document.createElement('p');
//     pEl.textContent = text;
  
//     if (classList.length > 0) {
//       pEl.classList.add(...classList);
//     }
  
//     return pEl;
//   };
  
//   export default paragraph;

/**
 * render a paragraph with optional styling
 *
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
const paragraph = (text, classList = []) => {
  const paragraphEl = document.createElement('p');
  paragraphEl.innerHTML = text;

  // check if there are classList
  classList.forEach((className) => {
      paragraphEl.classList.add(className);
  });

  return paragraphEl;
};

export default paragraph;