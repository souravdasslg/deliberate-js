function LLToArray(ll) {
  const values = [];
  let currentNode = ll;
  while (currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return values;
}
function createNode(val) {
  return { val, next: null };
}
function arrToLL(arr) {
  let list = null;
  let tail = null;
  for (let index in arr) {
    index = Number(index);
    if (index === 0) {
      const node = createNode(Number(arr[index]));
      list = node;
      tail = node;
    } else {
      tail.next = createNode(Number(arr[index]));
      tail = tail.next;
    }
  }
  return list;
}
const addTwoArray = (arr1, arr2) => {
  arr1.reverse();
  arr2.reverse();
  let carry = 0;
  let sum = '';
  for (let i = 0; i <= Math.max(arr1.length, arr2.length); i++) {
    // eslint-disable-next-line no-restricted-globals
    const num1 = isNaN(Number(arr1[i])) ? 0 : Number(arr1[i]);
    // eslint-disable-next-line no-restricted-globals
    const num2 = isNaN(Number(arr2[i])) ? 0 : Number(arr2[i]);
    const total = num1 + num2 + carry;
    sum += total % 10;
    carry = total < 10 ? 0 : Math.floor(total / 10);
  }
  if (carry > 0) {
    sum += carry;
  }
  sum = sum.split('');
  sum = sum.reverse();
  while (sum[0] == 0) {
    sum.shift();
  }
  return sum.length > 0 ? sum : [0];
};
const addTwoNumbers = function (l1, l2) {
  const l1Value = LLToArray(l1).reverse();
  const l2Values = LLToArray(l2).reverse();
  const sum = addTwoArray(l1Value, l2Values).reverse();
  const sumValueLL = arrToLL(sum);
  return sumValueLL;
};

export {
  addTwoNumbers,
  arrToLL,
};
