// Map: unordered collection of key-value pairs. Both can be any data type.

//1. Use corresponding key to retrieve value.

//2. Maps are iterable. Can be used with for of loops.

// Object vs Map
// Obj - unordered
// Obj - keys can be string or symbol
// Obj - default keys that can collide with own keys
// Obj - not iterable
// Obj - # of items must be determined manually
// Obj - storing data + attach functionality 

// Maps - ordered
// Maps - any type
// Maps - no keys by default
// Maps - iterable
// Maps - # of items available with size property
// Maps - only for storing data

// Map
const map = new Map([['a', 1], ['b', 2]])
// to add new value:
map.set('c', 3)
// to delete key value pair
map.delete('c')

console.log(map.has('a')) // bool

// check # of key value pair
console.log(map.size);

// delete all key value pairs
map.clear();

// display all key value pairs
for (const [key,value] of map) {
  console.log(`${key}: ${value}`)
}