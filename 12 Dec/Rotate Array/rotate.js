const rotate = function (nums, k) {
  while (k > 0) {
    const lastIndex = nums.length - 1;
    const lastElement = nums.splice(lastIndex, 1);
    nums.unshift(lastElement[0]);
    // eslint-disable-next-line no-param-reassign
    k -= 1;
  }
  return nums;
};
export {
  rotate,
};
