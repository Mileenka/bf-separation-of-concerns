'use strict';

const actual = (level, text, styling) => {
  const headerEl = document.createElement(`h${level}`);
  headerEl.textContent = text;

  if (styling) {
    const styles = styling.split(' ');
    headerEl.classList.add(...styles);
  }

  return headerEl;
};
