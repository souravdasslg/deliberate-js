const removeValue = (list, value) => {
  let currentNode = list;
  let resultingList = null;
  while (currentNode) {
    if (currentNode.val !== value) {
      if (resultingList === null) {
        resultingList = currentNode;
      } else {
        resultingList.next = currentNode;
      }
    }
    currentNode = list.next;
  }
  return resultingList;
};
export {
  removeValue,
};
