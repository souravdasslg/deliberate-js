
function truthCheck(objectList, predicate) {
  let isTruthy = true;
  // eslint-disable-next-line guard-for-in
  for (const objectIndex in objectList) {
    const object = objectList[objectIndex];
    if (Object.prototype.hasOwnProperty.call(object, predicate)) {
      if (!object[predicate]) {
        isTruthy = false;
      }
    } else {
      isTruthy = false;
    }
  }
  return isTruthy;
}

export {
  truthCheck,
};
