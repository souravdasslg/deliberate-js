import { findDisappearedNumbers } from './findDisappeared';

describe('Find Disappeared Numbers', () => {
  it('should return all the excluded number', () => {
    expect(findDisappearedNumbers([99, 0]).length).toBe(98);
    expect(findDisappearedNumbers([-1, 0])).toStrictEqual([]);
    expect(findDisappearedNumbers([-100, 0]).length).toBe(99);
  });
});
