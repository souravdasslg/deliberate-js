import { checkValidParentheses } from './validParentheses';

describe('Check Valid Parentheses', () => {
  it('Should return true if string is empty', () => {
    expect(checkValidParentheses('')).toBe(true);
  });
  it('Should return true for valid parentheses', () => {
    expect(checkValidParentheses('[]')).toBe(true);
    expect(checkValidParentheses('{}')).toBe(true);
    expect(checkValidParentheses('()')).toBe(true);
    expect(checkValidParentheses('[]{}()')).toBe(true);
    expect(checkValidParentheses('[{()}](){}[{}()()()]')).toBe(true);
  });
  it('Should return false for invalid parentheses', () => {
    expect(checkValidParentheses('{()}](){}[{}()()()]')).toBe(false);
    expect(checkValidParentheses('[')).toBe(false);
    expect(checkValidParentheses('{')).toBe(false);
    expect(checkValidParentheses('(')).toBe(false);
  });
});
