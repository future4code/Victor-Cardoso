/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */

/**
 * @params str
 * @params oneEdit
 * @returns true for valid oneEdit
 * @returns false for invalid oneEdit
 * @example Add character => victorr is oneEdit of victor
 * @example Remove character => victo is oneEdit of victor
 * @example Update character => victoo is oneEdit of victor
 * @example Invalid oneEdit => vitin is not oneEdit of victor

 * @TODO [X] Check if a string is oneEdit
 * @TODO [X] Check if the strings are the same size
 * @TODO [X] Check if the bigger string includes the smaller one
 * @TODO [X] If it's the same size, map the string to check if only 1 letter has changed
 * @TODO [X] Pass every test
 */
const isOneEdit = (str: string, oneEdit: string): boolean => {
  // Check if a string is oneEdit (Add or Remove)
  if (Math.abs(oneEdit.length - str.length) > 1) return false;
  // Check if a string is bigger than the other (Update)
  if (oneEdit.length > str.length) return oneEdit.includes(str);
  if (str.length > oneEdit.length) return str.includes(oneEdit);
  // Map to check if only one letter has changed
  let difference = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== oneEdit[i]) difference++;
  }
  return difference === 1;
};

const teste = isOneEdit("victor", "victor");
console.info("isOneEdit:", teste);
