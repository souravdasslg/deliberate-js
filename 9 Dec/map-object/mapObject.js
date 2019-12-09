
function mapObject(object, modifierFunc) {
  const modifiedObject = {};
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      modifiedObject[key] = modifierFunc(object[key]);
    }
  }
  return modifiedObject;
}

export {
  mapObject,
};
