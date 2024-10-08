export function analyzeArray(array) {
  return {
    average: average(array),
    min: minimum(array),
    max: max(array),
    length: length(array),
  };
}

function average(array) {
  return array.reduce((total, current) => total + current, 0) / array.length;
}

function minimum(array) {
  array.sort((a, b) => a - b);
  return array[0];
}

function max(array) {
  array.sort((a, b) => a - b);
  return array[array.length - 1];
}

function length(array) {
  return array.length;
}
