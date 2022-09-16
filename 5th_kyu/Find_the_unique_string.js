// ***In Progress
/* 
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/

/* 
PREP:
- so on
*/
const arr = ["aa", "BB"];
console.log(arr.map((val) => val.toLowerCase()));

function findUniq(arr) {
  const newArr = arr.map((val) => val.toLowerCase());
  console.log(newArr);
}

findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]);
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
