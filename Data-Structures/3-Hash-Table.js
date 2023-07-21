// Hash Table/Hash Map: structure used to store kay-value pairs.
                    //  Given a key, associate value with key for fast lookup
                    //  Javascript's Object is special implementation of hash table. Obj class adds it own keys. May conflict and overwrite inherited default properties.
                    // Writing my own hash table implemenentation is popular interview question.
                    // Store key value pairs in fixed sized array.

// Hashing function accepts string key, converts it into hash code, then maps into numeric index.
// Using numeric index, store value.

// Implementation

// 1. Set to store key-value pair
// 2. Get to retrieve a value given key
// 3. Remove to delete key value pair
// 4. Hashing function to convert string key to numeric index.

class HashTable {
  constructor(size) {
    this.table  = new Array(size)
    this.size = size
  }

  hash(key) { //creating hash method to set, get, and remove
    let total = 0
    for ( let i = 0; i < key.length; i++ ) {
      total += key.charCodeAt(i) // since value can't be greater than array size, we'll use modulus.
    }
    return total % this.size
  }

  set(key, value) {

  }
}

const table = new HashTable(50)