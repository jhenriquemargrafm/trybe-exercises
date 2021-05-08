const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('parameters must be numbers');
  }
  return a + b;
}

assert.strictEqual(typeof sum, 'function');

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);

// assert.throws(() => {
//  sum(4, '5');
//});
//assert.throws(() => {
//  sum(4, '5');
//}, /^Error: parameters must be numbers$/);

//const assert = require('assert');

//function myRemove(arr, item) {
//  let newArr = [];
//  for (let index = 0; index < arr.length; index += 1) {
//    if (item !== arr[index]) {
//      newArr.push(arr[index]);
//    }
//  }
//  return newArr;
//}


//assert.strictEqual(typeof myRemove, 'function');
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//const myList = [5, 6, 7, 8];
//myRemove(myList, 5);
//assert.deepStrictEqual(myList, [5, 6, 7, 8]);

//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

const myList = [1, 2, 3, 4];

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//myRemoveWithoutCopy(myList, 1);
//assert.strictEqual(myList.length, 3);

//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//const assert = require('assert');

//function myFizzBuzz(num) {
//  if (typeof num !== 'number') return false;
//  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//  if (num % 3 === 0) return 'fizz';
//  if (num % 5 === 0) return 'buzz';
//  return num;
//}

//assert.strictEqual(myFizzBuzz(45), 'fizzbuzz');
//assert.strictEqual(myFizzBuzz(18), 'fizz');
//assert.strictEqual(myFizzBuzz(25), 'buzz');
//assert.strictEqual(myFizzBuzz(17), 17);
//assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);

//const assert = require('assert');

//function myFizzBuzz(num) {
//  if (typeof num !== 'number') return false;
//  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//  if (num % 3 === 0) return 'fizz';
//  if (num % 5 === 0) return 'buzz';
//  return num;
//}

//assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
//assert.strictEqual(myFizzBuzz(9), 'fizz');
//assert.strictEqual(myFizzBuzz(25), 'buzz');
//assert.strictEqual(myFizzBuzz(17), 17);
//assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);