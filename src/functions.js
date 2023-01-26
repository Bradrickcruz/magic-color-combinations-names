import { names } from '../names.js';

export function getColorCombinationName(colorString) {
  return names.filter(([colors]) => {
    return (
      colors.length == colorString.length &&
      Array.from(colorString).every((c) => colors.includes(c))
    );
  })[0][1];
}
