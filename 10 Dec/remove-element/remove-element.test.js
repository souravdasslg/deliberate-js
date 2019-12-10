import { removeElement } from './remove-element';

describe('removeElement', () => {
  test('Should return 2', () => {
    const array = [1, 2, 3, 3, 3, 3, 4, 5];
    expect(removeElement(array, 3)).toBe(array.length);
  });
  test('Should return 5', () => {
    const array = [1, 2, 3, 4, 5, 6];
    expect(removeElement(array, 9)).toBe(6);
  });
});
