/**
 * Loops
 * Loops in JavaScript are a way to repeat a block of code multiple times.
 * 
 * Types of Loops in JavaScript :
    1.for
    2.while
    3.do while
    4.for of (arrays, strings, maps or sets [don’t care about index])
    5.for in ( iterating over the properties (keys) of an object or the indexes of an array)
 */


/**        1.for  */

// for (let i = 1; i <= 3; i++) {
//   // console.log("I love Coding");
//   console.log(i);
// }

/**        2.while */
// let i = 1;
// while(i <= 10){
//   console.log(i);
//   i++;
// }

/**        3.do while */

// let i = 13;
// do {
//   console.log(i);
//   i++
// } while (i < 10)

/**        4. for of loop  
 * it print the value of array or string.
*/

// let str = "Mozahid Izhar";

// for(let ch of str){
//   console.log(ch);
// }

/**  
 *         5.for in
 *  it print the keys or index of array  or object.
 */

// let str = "Mozahid Izhar"

// for(let ch in str){
//   console.log(ch);
// }


/**  Challenge 1: 
 * Print all even number btn 0 to 100 
 */

// let EvenNum;

// for(let i = 1 ; i <=100 ; i++){
//   EvenNum = i % 2 == 0
//   if(EvenNum){
//     console.log(i);
//   }
// }

/** Challenge 2:
 *  Calculate how many vowel and consonents are there in given string.
 */

// let str = "hello";
// let vowelCount = 0;
// let consonentsCount = 0

// for (let ch of str) {
//   // console.log(ch);
//   if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
//     vowelCount++
//   }else{
//     consonentsCount++
//   }
// }

// console.log("Vowel Count :",vowelCount);
// console.log("Consonent Count :",consonentsCount);