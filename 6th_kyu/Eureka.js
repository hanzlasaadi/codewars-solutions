/* Statement
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

90, 100 --> []
*/

/* Thought Process
- first I needed to loop over the range
- then check for eureka numbers through a different function (better reading)
- if a number is a eureka number, push it to the array
- return the array
*/

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (checkEureka(i)) arr.push(i);
  }
  return arr;
}

function checkEureka(num) {
  const checked = `${num}`
    .split("")
    .reduce((acc, crr, i) => (acc += crr ** (i + 1)), 0);
  return checked === num ? true : false;
}

/*
const chai = require("chai");
const assert = chai.assert;

describe("Tests", function() {
  it("Fixed tests", function() {
      assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
      assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
      assert.deepEqual(sumDigPow(10, 100),  [89])
      assert.deepEqual(sumDigPow(90, 100), [])
      assert.deepEqual(sumDigPow(90, 150), [135])
      assert.deepEqual(sumDigPow(50, 150), [89, 135])
      assert.deepEqual(sumDigPow(10, 150), [89, 135])
  });
});
*/
