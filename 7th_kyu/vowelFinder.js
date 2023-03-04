/*Statement
Write a function that takes in a string. Find all vowels in thaat string

##Requirements

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
/*Prep
- First I need to declare an array containing vowels
- Then, I'll split the string and loop over it.
- In that loop, I'll nest a loop for vowels array and match all vowels
- if something matches, I'll increment a temp variable
*/

/* Solution */
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").forEach((el) => {
    vowels.forEach((v) => {
      if (v === el) count++;
    });
  });
  return count;
}

/* Test 
const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
      assert.strictEqual(getCount("abracadabra"), 5) ;
    });
});
*/
