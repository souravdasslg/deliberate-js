const removeVowels = function (S) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return S.split('').map((letter) => {
    if (vowels.indexOf(letter) === -1) return letter;
  }).join('');
};
export {
  removeVowels
}
