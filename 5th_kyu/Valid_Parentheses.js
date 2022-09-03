//Statement
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/
//Prep
/*
-- no prep, I looked at the solutions
 */

//Solution
function validParentheses(parens) {
  let num = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") num++;
    if (parens[i] === ")") num--;
  }
  return num === 0;
}

//Jest tests
/*
const { assert } = require('chai');

describe("Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses( "(" ), false));
  it(`values: ")"`, () => assert.strictEqual( validParentheses( ")" ), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses( "" ), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses( "()" ), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses( "())" ), false));
});

 */
