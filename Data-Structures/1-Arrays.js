// Array: Data structure that holds collection of values.
       // Can contain different data types.
       // Resizable.
       // Zero-indexed and insertion order maintained.
       // Iterables. Used with for of loop.

const arr = [1,2,3, 'YuhBoh']

// Basic array methods
arr.push(4) // adds to end of list
arr.unshift(0) // adds to beginning of list
arr.pop() // deletes from end of list
arr.shift() //deletes from beginning of list
console.log(arr[0])
console.log(arr)

for (item of arr) {
  console.log(item)
}

// Other methods
// .map() -  Creates new array from calling a function for every array element.
          // array.map(function(currentValue, index, arr), thisValue)

// .filter() - Creates new array filled with elements that pass test provided by a function.
           //  array.filter(function(currentValue(R), index, arr), thisValue)

// .concat() - joins two or more arrays into new array.
           //  array.slice(start, end)

// .join() - creates/returns new string by concatenating all elements in an array
          //  array.join(separator)

// .slice() - returns selected elements in an array, as a new array.
          //  array.slice(inclusiveStart, exclusiveEnd)


// .splice() - adds and/or removes array elements
           //  array.splice(index, howmany, item1, ....., itemX)

// Big-O time complexity
// Insert/Remove from end - O(1)
  // Push/Pop - O(1)
// Insert/Remove from beginning - 0(n)
  // Shift/Unshift/Concat/Slice/Splice - O(n)
// Access - O(1)
// Search - O(n)
// forEach/Map/Filter/Reduce - O(n)
