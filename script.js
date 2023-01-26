import { inputLimiter, showColorCombinationName } from './src/events.js';
import { getColorCombinationName } from './src/functions.js';

document.querySelector('.colorFinder').addEventListener('input', inputLimiter);
document
  .querySelector('.colorFinder')
  .addEventListener('keyup', showColorCombinationName);

// carregar nome da combinação do input inicial
document.querySelector('.combinationName').innerText = getColorCombinationName(
  document.querySelector('.combinationName').innerText
);
