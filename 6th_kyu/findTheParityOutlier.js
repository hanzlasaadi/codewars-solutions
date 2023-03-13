//Problem Statement
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

//Prep
/*
- first I needed to filter both arrays separating odd and even numbers
- then based on the comparison of the lengths of both arrays, I return either odd or even number. 
 */

//Solution
function findOutlier(integers) {
  const evens = integers.filter((even) => even % 2 === 0);
  const odds = integers.filter((odd) => odd % 2 !== 0);
  return evens.length > odds.length ? odds[0] : evens[0];
}

// JEST Tests
/*
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(findOutlier([0, 1, 2]), 1)
    Test.assertEquals(findOutlier([1, 2, 3]), 2)
    Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
    Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
    Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
  });
});
*/
