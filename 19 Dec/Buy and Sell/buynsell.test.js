import { maxProfit } from './buyNsell';

describe('Calculate Max Profit', () => {
  it('should calculate maximum profit', () => {
    expect(maxProfit([])).toBe(0);
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    expect(maxProfit([9, 2, 3, 2, 1])).toBe(1);
  });
});
