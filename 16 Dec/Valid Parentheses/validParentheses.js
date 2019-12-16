const checkValidParentheses = (string) => {
  const bracketPair = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];
  for (const char of string) {
    // eslint-disable-next-line no-prototype-builtins
    if (bracketPair.hasOwnProperty(char)) {
      stack.unshift(char);
    } else if (bracketPair[stack[0]] === char) {
      stack.shift();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

export {
  checkValidParentheses,
};
