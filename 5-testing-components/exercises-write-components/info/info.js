/**
 * Render a drop-down info element.
 *
 * @param {string} caption - The title of this info drop-down.
 * @param {string} mainText - The important information.
 * @param {string} [id=''] - The element's id.
 * @returns {HTMLDetailsElement} The rendered drop-down info element.
 */
export const info = (caption, mainText, id = '') => {
    const detailsEl = document.createElement('details');
    if (id) {
      detailsEl.id = id;
    }
  
    const summaryEl = document.createElement('summary');
    summaryEl.textContent = caption;
  
    const pEl = document.createElement('p');
    pEl.textContent = mainText;
  
    detailsEl.appendChild(summaryEl);
    detailsEl.appendChild(pEl);
  
    return detailsEl;
  };
  