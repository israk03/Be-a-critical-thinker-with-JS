//! Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false

const isPalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = normalizedStr.length - 1;

  while (left < right) {
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("Level"));
console.log(isPalindrome("car"));
