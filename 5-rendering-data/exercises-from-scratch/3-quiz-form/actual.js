'use strict';

const actual = ({ question, answers, correct, selected }) => {
  const formElement = document.createElement('form');
  const questionElement = document.createElement('h3');
  questionElement.textContent = question;
  formElement.appendChild(questionElement);

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'answer';
    radioInput.value = i;
    radioInput.checked = i === selected;

    const labelElement = document.createElement('label');

    if (i === selected && i === correct) {
      const answerElement = document.createElement('span');
      answerElement.textContent = '√ ' + answer;
      answerElement.className = 'correct';
      labelElement.appendChild(answerElement);
      radioInput.checked = true;
    } else if (i === selected && i !== correct) {
      const answerElement = document.createElement('span');
      answerElement.textContent = '✖ ' + answer;
      answerElement.className = 'incorrect';
      labelElement.appendChild(answerElement);
      radioInput.checked = true;
    } else {
      labelElement.textContent = answer;
    }

    labelElement.insertBefore(radioInput, labelElement.firstChild);
    formElement.appendChild(labelElement);
    formElement.appendChild(document.createElement('br'));
  }

  return formElement;
};

