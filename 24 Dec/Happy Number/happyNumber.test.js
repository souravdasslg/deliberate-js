// eslint-disable-next-line import/named
import { isHappy } from './happyNumber';

describe('Check Happy Number', () => {
  it('should return 82', () => {
    expect(isHappy(19)).toBe(82);
  });
});
