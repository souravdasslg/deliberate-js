import HashTable from './hashTable';

describe('Hash Table', () => {
  const HT = new HashTable(3);
  it('should be able to store data', () => {
    HT.set('red', '#ff00bb');
    HT.set('blue', '#0000ff');
    HT.set('green', '#00ff00');
    HT.set('purple', '#ff00ff');
    HT.set('orange', '#ff5f00');
    expect(HT.get('red')).toBe('#ff00bb');
    expect(HT.get('blue')).toBe('#0000ff');
    expect(HT.get('green')).toBe('#00ff00');
    expect(HT.get('purple')).toBe('#ff00ff');
    expect(HT.get('orange')).toBe('#ff5f00');
  });
  it('should return undefined if invalid key passed', () => {
    expect(HT.get('HAHAHA')).toBe(undefined);
  });
  it('should update value for a key', () => {
    HT.set('newValue', 5);
    HT.set('newValue', 10);
    expect(HT.get('newValue')).toBe(10);
  });
});
