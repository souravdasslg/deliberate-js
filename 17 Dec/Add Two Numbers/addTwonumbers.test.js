import { arrToLL, addTwoNumbers } from './addTwoNumbers';

describe('Add Two numbers', () => {
  it('should return 0', () => {
    const list1 = arrToLL([0]);
    const list2 = arrToLL([0]);
    const resultList = arrToLL([0]);
    expect(addTwoNumbers(list1, list2)).toStrictEqual(resultList);
  });
  it('should return 100', () => {
    const list1 = arrToLL([9, 9]);
    const list2 = arrToLL([1]);
    const resultList = arrToLL([0, 0, 1]);
    expect(addTwoNumbers(list1, list2)).toStrictEqual(resultList);
  });
  it('should return ', () => {
    const list1 = arrToLL([5, 5, 5, 5, 5, 5]);
    const list2 = arrToLL([5, 5, 5, 5]);
    const resultList = arrToLL([5, 6, 1, 1, 1, 0].reverse());
    expect(addTwoNumbers(list1, list2)).toStrictEqual(resultList);
  });
});
