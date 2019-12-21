import { lengthOfLastWord } from './lenOfLastWord';

describe('Calculate Length Of Last Word', () => {
  it('Calculate Length Of Last Word ', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
    expect(lengthOfLastWord('a ')).toBe(1);
  });
});
