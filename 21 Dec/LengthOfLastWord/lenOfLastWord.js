const lengthOfLastWord = function(s) {
  const words = s.trim().split(' ')
  const lastWord = words[words.length - 1]
  const lastWordLength = lastWord.length
  return lastWordLength;
}
export {
  lengthOfLastWord
}
