// Objects: undordered collection of key-value pairs.
        //  keys must be string or symbol sand value can be any type.
        //  retrieve value by corresponding key. Dot notation or bracket notation
        //  not iterable. no for of loop.

const obj = {
  name: "Bruce",
  age: 25,
  "key-three": true,
  // add functions as values
  sayMyName: function() {
    console.log(this.name)
  }
};

console.log(obj.name); 
console.log(obj['age']); // used when obj key has spaces or hyphen
console.log(obj['key-three']);

// dot notation and bracket can add/delete to obj
obj.hobby = 'football';
delete obj.hobby;


console.log(obj);

// Other methods
// Object.keys() - returns array of a given object's own enumerable string-keyed
// Object.values()
// Object.entries()

// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)