const findDisappearedNumbers = (numbers) => {
  numbers.sort();
  const excludedElement = [];
  for (let number = numbers[0]; number <= numbers[numbers.length - 1]; number += 1) {
    const indexOfCurrentNumber = numbers.indexOf(number);
    if (indexOfCurrentNumber === -1) {
      excludedElement.push(number);
    }
  }
  return excludedElement;
};
export {
  findDisappearedNumbers,
};
