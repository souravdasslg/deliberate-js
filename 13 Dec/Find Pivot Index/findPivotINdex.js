function findPivotIndex(nums) {
  let pivotIndex = -1;
  for (let index in nums) {
    if (pivotIndex === -1) {
      index = Number(index);
      const sumOfLeftNumbers = nums.slice(0, index).reduce((a, b) => a + b, 0);
      const sumOfRightNumbers = nums.slice(index + 1).reduce((a, b) => a + b, 0);
      if (sumOfLeftNumbers === sumOfRightNumbers) pivotIndex = index;
    }
  }
  return pivotIndex;
}
export {
  findPivotIndex,
};
