'use strict';

const element = document.createElement('input');
element.nodeName === 'INPUT';
element.className = 'auth-field';
element.placeholder = 'enter your username';

// the assertions are correct!  write code above to pass them
console.assert(element.nodeName === 'INPUT', 'Test 1: nodeName');
console.assert(
  element.placeholder === 'enter your username',
  'Test 2: placeholder',
);
console.assert(element.className === 'auth-field', 'Test 3: className');
