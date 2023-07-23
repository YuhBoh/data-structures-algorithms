//UNCOMPRESS
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

{/* <number><char>

for example, '2c' or '3a'. */}

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
  // create variable to return
  // two variables one for numbers, one for letters.

  // Since I don't know how long the input is, use while loop
  // if variable points at number, ++
  // else slice indices bet i and j
  //.     .join and another loop
  // j++ if num of j < number

  //return result
  result = []; // array because O(1) when new element added.
  nums = "0123456789";
  i = 0; // index that points to 0;
  j = 0; // same.
  while (j < s.length) {
    if (nums.includes(s[j])) {
      // if  nums includes a number from index [j] of input s
      j++; // go to next index. repeat.
    } else {
      // else if s[j] is not number
      const num = Number(s.slice(i, j)); // slice everything between indices i and j and turn data type into int.
      for (count = 0; count < num; count++) {
        //for loop to increase counter if counter < int num
        result += s[j]; // add string to string
      }
      j++;
      i = j;
    }
  }
  return result;
};

console.log(uncompress("3a4s5d"));

// COMPRESS
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// You can assume that the input only contains alphabetic characters.

const compress = (s) => {
  // 2 variables = 0;
  // result = [];

  // while loop
  // if [j] === [i], j++
  // else count = j - i
  // if count === 1, push [j]
  // else push count + [j]

  // i = j
  // return results.join('')

  i = 0;
  j = 0;
  result = [];

  while (j <= s.length) {
    if (s[j] === s[i]) {
      j++;
    } else {
      let count = j - i;
      if (count === 1) {
        result.push(s[i]);
      } else {
        result.push(count, s[i]);
      }
      i = j;
    }
  }
  return result.join("");
};

console.log(compress("ccaaatsss"));