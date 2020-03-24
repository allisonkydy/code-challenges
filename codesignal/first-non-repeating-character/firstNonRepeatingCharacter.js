// Codesignal

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(s) {
    const charCounts = new Map();

    // count each char in given string
    for (let char of s) {
        if (charCounts.has(char)) {
            charCounts.set(char, charCounts.get(char) + 1);
        } else {
            charCounts.set(char, 1);
        }
    }

    // look for non-repeating char
    for (let [char, count] of charCounts) {
        if (count === 1) {
            return char
        }
    } 

    // no non-repeating chars exist
    return '_';
}
