/** An array is a list that can store multiple values in one place. Think of it like a row of boxes, where each box can hold one item (like a number, word, etc.).
You can use it to group similar things together. */


// let ConstructorArray = new Array(20)
// console.log(ConstructorArray);

// let array = [10, 20, 30, 40, 50, 60, 70]

// console.log("OLD ARRAY : ", array);

// array.push(15)
// console.log("UPDATED WITH PUSH",array); // Change in orginal array

// array.pop()
// console.log("UPDATED WITH POP",array); // Change in orginal array

// array.unshift(22)
// console.log("UPDATED WITH UNSHIFT",array); // Change in orginal array

// array.shift()
// console.log("UPDATED WITH SHIFT",array); // Change in orginal array

// array.splice(1,3)
// console.log("UPDATED WITH SPLICE",array); // Change in orginal array

// console.log(array.sort((a, b) => {
//   return b - a
// }));
// =======================================================


// console.log("UPDATED WITH slice",array.slice(1,3)); // Don't Change in orginal array

// console.log(array.join(" & "));


/** 
1. push()       -   New length of the array                  -   Add item at the end
2. pop()        -   The removed last item                    -   Delete item from end
3. unshift()    -   New length of the array                  -   Add item to start
4. shift()      -   The removed first item                   -   Delete item from start
5. splice()     -   An array of removed items                -   Add remove or doing both at the same time
6. slice()      -   A new array (sliced portion)             -   Returns a piece of array
7. concat()     -   A new array (combined arrays)            -   Joins multiple arrays (we can also use spread operator instead)
8. join()       -   A string made by joining elements        -   join the elements of array on the basis of some string or character
9. toString()   -   A string of array elements               -   Converts array to string
10. includes()  -   true or false                            -   Check whether given item is present in array or not
11. indexOf()   -   Index of the item or 1 if not found      -   returns the index of given item if it is present in array, otherwise returns 1
12. reverse()   -   The reversed array                       -   Reverse the order of items
13. sort()      -   The sorted array                         -   Sort the array
14. find()      -   The first matching item (or undefined)   -   Returns the first element in the array that satisfies a condition
15. flat()      -   A new array with nested arrays flattened -   returns a new array with nested arrays flattened
 */


// =============================================================



// let arr = [4, 3, 21, 35, 67, 33, 67];

// 1.map()

// let newArr = arr.map((elem, ind, arr) => {
//   console.log(elem, ind, arr);

//   return elem * 2
// })

// console.log(newArr);

// 2.filter()

// let filterArr = arr.filter((elem, index, arr) => {
//   console.log(`${elem}  *  ${index}  = `, elem * index);
//   return elem > 20
// })


// console.log(filterArr);

// 3.reduce()

// let result = arr.reduce((preVal,currval)=>{
//   return preVal + currval;
// },20)

// console.log(result);


// 4.forEach 

// let newArr = arr.forEach((elem) => {
//   console.log(elem*2);
// })

// console.log(newArr);