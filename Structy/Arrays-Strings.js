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

// ANAGRAMS (hash maps, objects)
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

const anagrams = (s1, s2) => {
  // create an obj
  //for of loop
  // if elements not in obj, ++;

  // for of loop s2
  // if ele in obj, --;
  // else false not anagrams

  // for in loop obj : in looks at keys.
  // if elem in ibj !== 0, false

  // return true
  const count = {};
  for (char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char]++;
  }

  for (char of s2) {
    if (char in count) {
      count[char]--;
    } else {
      //else if char not in count, return false.
      return false;
    }
  }

  for (char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(anagrams("restful", "fluster"));

// Most Frequent Char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

const mostFrequentChar = (s) => {
  // count = {};
  //for of (value)
  // if not in count, add 1

  count = {};
  //most_frequent = 0; not looking for frequency, looking for letter

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char]++;
  }

  let best = null; // start with empty string
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }

  return best;

  // Pair Sum
  //Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

  // Be sure to return the indices, not the elements themselves.

  // There is guaranteed to be one such pair that sums to the target.
  
  // const pairSum = (numbers, targetSum) => {
  //   // loop through numbers 2 variables
  //   // if i+j = targetSum
  //   // return indices
  //   for(let i = 0; i < numbers.length ; i++) {
  //     for(let j = i + 1; j < numbers.length ; j++) {
  //       if (numbers[i] + numbers[j] === targetSum) {
  //         return [i, j];
  //       }
  //     }
  //   }
  // };

  const pairSum = (numbers, targetSum) => {
    const previousNums = {}; //numbers you have seen.
    for (let i = 0; i < numbers.length; i++) {
      //i=index
      const num = numbers[i];
      const compliment = targetSum - num;

      if (compliment in previousNums) {
        return [i, previousNums[compliment]];
      }
      previousNums[num] = i;
    }
  };
};

console.log(mostFrequentChar("potato"));
  
  