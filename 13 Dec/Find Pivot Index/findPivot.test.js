import { findPivotIndex } from './findPivotINdex';

describe('Find Pivot Index', () => {
  it('should return -1 if array is empty', () => {
    expect(findPivotIndex([])).toBe(-1);
  });
  it('should return 3', () => {
    expect(findPivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });
});
