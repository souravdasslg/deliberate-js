import {removeVowels} from "./removeVowel"

describe('Remove Vowel', function () {
  it('should remove vowel', function () {
    expect(removeVowels("leetcodeisacommunityforcoders")).toBe("ltcdscmmntyfrcdrs")
  });
});
