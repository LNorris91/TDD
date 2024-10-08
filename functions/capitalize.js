export function capitalize(string) {
  const regex = new RegExp(/[A-Za-z]+/i);

  for (let i = 0; i < string.length; i++) {
    if (regex.test(string.charAt(i))) {
      return string.slice(0, i) + string.charAt(i).toUpperCase() + string.slice(i + 1);
    }
  }
  return string;
}
