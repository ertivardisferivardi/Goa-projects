// Here are five sets of exercises, each related to the array methods and properties you provided. The last set combines multiple methods for more advanced tasks.

// ---

// ## **Exercise Set 1: Basics (Array Length, toString, at, join, pop, push)**
// 1. **Get Length**: Create an array with 5 items. Log the length of the array.
//  let arrayLength = [1, 2, 3, 4, 5];
//  console.log(arrayLength.length);
// // 2. **Convert to String**: Convert the same array to a string using `toString()` and log the result.
//  let arrayToString = arrayLength.toString();
//  console.log(arrayToString);
// // 3. **Access Element**: Use the `at()` method to access the second element and log it.
//  let arrayAt = arrayLength.at(1);
//  console.log(arrayAt);
// // 4. **Join Elements**: Use `join()` to combine the array elements with `-` between them.
//  let arrayJoin = arrayLength.join("\\");
//  console.log(arrayJoin);
// // 5. **Push & Pop**: Add two new elements to the array using `push()`, then remove the last element using `pop()`.
// arrayLength.push('new element', 'element');
// arrayLength.pop();
// console.log(arrayLength);

// ---

// ## **Exercise Set 2: Modify Array (shift, unshift, delete, concat)**
// 1. **Shift Element**: Create an array and remove the first element using `shift()`.
// let newarr = [1, 2, 3, 4, 50];
// newarr.shift();
// console.log(newarr);

// // 2. **Unshift Element**: Add a new element at the beginning using `unshift()`.
//  newarr.unshift(10);
// console.log(newarr);
// // 3. **Delete Element**: Use the `delete` operator to remove the second element. Log the array and observe the result.
// delete newarr[1];
// console.log(newarr);
// // 4. **Concatenate Arrays**: Create two arrays and use `concat()` to merge them.
//   let newarr2 = [6,7,8];
//   let newarr3 = newarr.concat( newarr2);
//   console.log(newarr3);
// // 5. **Explore Unshift & Length**: After using `unshift()`, log the new length of the array.
//   newarr3.unshift(0);
//   console.log(newarr3);
//   console.log(newarr3.length);

// ---

// // ## **Exercise Set 3: Searching (indexOf, lastIndexOf, includes)**
// // 1. **Find Index**: Create an array with repeated values. Use `indexOf()` to find the first occurrence of an element.
//    let arrSearch = [1, 2, 3, 3, 4, 5];
//    console.log(arrSearch.indexOf(3)); 
// // 2. **Find Last Index**: Use `lastIndexOf()` to find the last occurrence of the same element.
//    console.log(arrSearch.lastIndexOf());
// // 3. **Check Inclusion**: Use `includes()` to check if a specific element exists in the array.
//    console.log(arrSearch.includes(10));
// // 4. **Invalid Index Search**: Use `indexOf()` to search for a non-existing element. Log the result.
//    console.log(arrSearch.indexOf(10));
// // 5. **Case Sensitivity**: Check if `includes()` is case-sensitive by searching for different cases of the same string.
//    console.log(arrSearch.includes("Hello"));
   

// ---

// ## **Exercise Set 4: Sorting and Reversing (sort, reverse)**
// 1. **Sort Strings**: Create an array of strings and sort them using `sort()`.
//    let arrSort = ["dpple", "banana", "cherry"];
//    console.log(arrSort.sort());

// // 2. **Sort Numbers**: Create an array of numbers and sort them in ascending order.
//    let arrNumSort = [3, 1, 2, 5, 4];
//    console.log(arrNumSort.sort());
// // 3. **Custom Sort**: Use a custom comparison function to sort numbers in descending order.
//    let arrCustomSort = [3, 1, 2, 5, 4];
//    arrCustomSort.sort((a, b) => b - a);
//    console.log(arrCustomSort);
// // 4. **Reverse Array**: Use `reverse()` on a sorted array and log the result.
//    arrNumSort.reverse();
//    console.log(arrNumSort);
// // 5. **Mix Sort and Reverse**: Sort an array, then reverse it.
//    arrCustomSort.reverse();
//    console.log(arrCustomSort);

// ---

// // ## **Exercise Set 5: Combined Operations**
// // 1. **Sort and Push**: Create an array of numbers, sort it, and add a new number using `push()`. Log the updated array.
// let nums = [1,2,3,9,6,10,8];
// nums = nums.sort();
// nums.push(5);
// console.log(nums);
// // 2. **Concatenate and Sort**: Create two arrays, merge them with `concat()`, and sort the result.
//  let arrConcat = [1,2,3,4].concat([5,6,7]);
//  arrConcat = arrConcat.sort();
//  console.log(arrConcat);
// // 3. **Push and Reverse**: Add three new elements to an array, then reverse the entire array.
//  nums.push(7, 5);
//  nums.reverse();
//  console.log(nums);
// // 4. **Find and Remove Element**: Use `indexOf()` to locate an element, then use `splice()` to remove it.
//  let index = nums.indexOf(5);
//  nums.splice(index, 1);
//  console.log(nums);
// // 5. **Join and Include Check**: Join the elements of an array into a string, split it back into an array, and check if a specific value is included using `includes()`.
//  let str = nums.join(", ");
//  let arr2 = str.split(", ");
//  console.log(arr2.includes(5));
//  console.log(arr2.includes(8));
//  console.log(arr2.includes(11)); // should return false, as 11 is not in the array.

// Asceding - ზრდადობით