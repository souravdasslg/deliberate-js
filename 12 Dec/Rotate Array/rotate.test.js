import { rotate } from './rotate';

describe('Rotate Array', () => {
  it('should rotate the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(arr, 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
  it('should not rotate the array if value is 0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(arr, 0)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('Single element array should return the same array', () => {
    const arr = [1];
    expect(rotate(arr, 5000)).toEqual([1]);
  });
});
