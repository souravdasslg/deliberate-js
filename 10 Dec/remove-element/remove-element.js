const removeElement = (numbers, val) => {
  let indexOfValue = numbers.indexOf(val);
  while (indexOfValue !== -1) {
    numbers.splice(indexOfValue, 1);
    indexOfValue = numbers.indexOf(val);
  }
  return numbers.length;
};
export {
  removeElement,
}
;