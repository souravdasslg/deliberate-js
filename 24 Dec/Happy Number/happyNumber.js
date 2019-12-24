const isHappy = (n) => {
  const numbers = String(n).split('');
  const sum = numbers.reduce((acc, next) => {
    const nextNum = Number(next);
    const newSum = acc + (nextNum * nextNum);
    return newSum;
  }, 0);

  if (sum !== 1) isHappy(sum);
  return sum;
};

export {
  isHappy,
};
