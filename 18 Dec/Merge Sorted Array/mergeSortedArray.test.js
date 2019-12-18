import { mergeSortedArray } from './mergeSortedArray';

describe('Merge Sorted Array', () => {
  it('Should Return sorted array', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    expect(mergeSortedArray(nums1, m, nums2, n)).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });
});
