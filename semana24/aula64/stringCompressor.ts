/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
export const stringCompressor = (word: string): string => {
  // Make compressed string into an array
  const compressedString = [];
  // Last letter iterated starts as the first letter of the string
  let lastLetter = word[0];
  // Last letter counter
  let letterCount = 0;

  // For each letter in a word
  for (const letter of word) {
    // Check if the last letter is not equal to the actual letter
    if (letter !== lastLetter) {
      // Add the letter and counter number if not equal
      compressedString.push(lastLetter + letterCount);
      lastLetter = letter;
      letterCount = 0;
    }
    // Add 1 to the counter number into the compressed string
    letterCount++;
  }

  // Insert the final letter and its count into the compressedString
  compressedString.push(lastLetter + letterCount);

  // compressedString result starts as empty string
  let result = "";
  // Add each letter and counter number to the result string
  for (const key of compressedString) {
    result += key;
  }

  // Check if the compressed string is bigger than the word typed
  return result.length > word.length ? word : result;
};
