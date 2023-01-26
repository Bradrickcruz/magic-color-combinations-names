import { getColorCombinationName } from './functions.js';

export function inputLimiter(e) {
  if(!e.data) return;
  const permittedLetters = 'WUBRG';
  const inputData = e.data.toUpperCase();
  if (
    permittedLetters.includes(inputData) &&
    !e.currentTarget.value.includes(inputData)
  )
    return (e.currentTarget.value = e.currentTarget.value.toUpperCase());
  e.currentTarget.value = e.currentTarget.value.slice(0, -1);
}

export function showColorCombinationName(e) {
  const inputString = e.currentTarget.value;
  const name = getColorCombinationName(inputString);
  document.querySelector('.combinationName').innerText = name;
}
