class Hashtable {
  constructor(arrayLength = 53) {
    this.keyMap = new Array(arrayLength);
  }

  hash(key) {
    const primeNumber = 31;
    let sum = 0;
    for (let i = 0; i <= Math.min(key.length, 100); i++) {
      sum += key.charCodeAt(key);
    }
    const hashedIndex = (sum * primeNumber) % this.keyMap.length;
    return hashedIndex;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    if (this.keyMap[index]) {
      for (const elementIndex in this.keyMap[index]) {
        if (this.keyMap[index][elementIndex]) {
          if (this.keyMap[index][elementIndex][0] === key) {
            this.keyMap[index][elementIndex][1] = value;
            return true;
          }
        }
      }
    }
    this.keyMap[index].push([key, value]);
    return true;
  }

  get(key) {
    const index = this.hash(key);
    const elements = this.keyMap[index];
    if (!elements) return undefined;
    for (const element of elements) {
      if (element[0] === key) return element[1];
    }
    return undefined;
  }

  keys() {
    const keys = [];
    this.keyMap.map((elements) => {
      if (elements) elements.map((element) => keys.push(element[0]));
    });
    return keys;
  }

  values() {
    const keys = [];
    this.keyMap.map((elements) => {
      if (elements) elements.map((element) => keys.push(element[0]));
    });
    return keys;
  }
}
export default Hashtable;
