export function caesarCipher(string, shiftFactor) {
  let result = '';
  const regex = new RegExp(/[A-Za-z]+/i);

  for (let i = 0; i < string.length; i++) {
    if (regex.test(string.charAt(i))) {
      result += shiftLetter(string.charAt(i), shiftFactor);
    } else result += string.charAt(i);
  }

  return result;
}

function shiftLetter(letter, shift) {
  if ('a' <= letter && letter <= 'z') {
    const start = 96;
    const limit = 122;
    const newCode = letter.charCodeAt() + shift;
    if (newCode > limit) {
      const diff = newCode - limit;
      return String.fromCharCode(start + diff);
    } else return String.fromCharCode(newCode);
  }

  if ('A' <= letter && letter <= 'Z') {
    const start = 64;
    const limit = 90;
    const newCode = letter.charCodeAt() + shift;
    if (newCode > limit) {
      const diff = newCode - limit;
      return String.fromCharCode(start + diff);
    } else return String.fromCharCode(newCode);
  }
}
