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