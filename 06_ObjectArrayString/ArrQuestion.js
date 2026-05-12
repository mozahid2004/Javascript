/** 
    1.For an array with marks of students find the average marks of the entire class.

    2.Create an array with the given length(n) and fill with 0.

    3.Create an array with the given length (n) and store natural numbers from 1 to n.

    4.Consider an array of mcu heroes ([ironman, captain, black widow, wanda , hulk, black panther]).
    Now:
    a)Add spiderman at the end and thor at the start.
    b)Remove black widow and add hawkeye in its place.
    c)Check whether captain is present in the array.

    5.How to check if given thing is array or not? How to convert other datatypes to array ? What if we try to convert an object into an array?

    6.We have three variables a, b, c, a contains any number, b contains any string, c contains any object,
      and d contains any array. Can we create an array from all these four variables? If yes, How?

    7.Check whether given string is palindrome or not.

    8.Capitalize the first letter of every word in a sentence.     

*/

//   1.For an array with marks of students find the average marks of the entire class.

// let markOfStudent = [50, 60, 33, 50, 78, 98, 56, 76, 46, 33, 78, 89]

// let averageOfMasks = markOfStudent.reduce((preVal, currVal) => {

//   let totalMarks = preVal + currVal
//   return totalMarks;
// })

// console.log("Total Marks of Student In class is",averageOfMasks);
// console.log("Total Number of Student In class is",markOfStudent.length);
// console.log("Avarage Marks of Student In class is",averageOfMasks/markOfStudent.length);

// =========================

//  2.Create an array with the given length(n) and fill with 0.

// let n = prompt("Enter Number")

// let arr = new Array(Number(n)).fill(0)
// console.log(arr);



// arr.map((elem, indx) => {
//   arr[indx] = indx + 1
// })

// console.log(arr);

// ==================================

// let heroes = ["ironman", "captain", "blackWidow", "wanda", "hulk", "blackPanther"]

// console.log(heroes);

// a)Add spiderman at the end and thor at the start.

// heroes.push("spiderman")
// console.log(heroes);

// heroes.unshift("thor")
// console.log(heroes);


// b)Remove black widow and add hawkeye in its place.

// heroes.splice(2,1,"hawkeye")
// console.log(heroes);

// c)Check whether captain is present in the array.

// console.log(heroes.includes("captain"));

// ===============================

// 5.How to check if given thing is array or not? How to convert other datatypes to array ? What if we try to convert an object into an array?

// let test = "Sahil"
// let test = {
//   name:"Mozahid",
//   class:13,
//   roll:25
// }

// console.log(Array.isArray(test));
// console.log(Array.from(test));

// ==================================

// 6.We have three variables a, b, c, a contains any number, b contains any string, c contains any object,
// and d contains any array. Can we create an array from all these four variables? If yes, How?

// let a = 1
// let b = "m"
// let c = { name: "sahil" }
// let d = ["apple", "mango"]

// let arr = [a, b, c, d]

// // console.log(arr.flat(Infinity));
// console.log(arr);

// console.log(Array.of(a, b, c, d));


// 7.Check whether given string is palindrome or not.

// let str = prompt("Enter Word")
// let arr = str.split("")


// console.log();
// if (arr.join("") == arr.reverse().join("")) {
//   console.log(`${arr.join("")} equal to ${arr.reverse().join("")} \nso,its Palindrome`);
// } else {
//   console.log(`${arr.join("")} not equal to ${arr.reverse().join("")} \nso,its Not Palindrome`);
// }




// 8.Capitalize the first letter of every word in a sentence.


// let sentence = prompt("Example write something here..")

// console.log(sentence);

// let eachWord = sentence.split(" ")

// // console.log(eachWord);
 
// const CapitalizedSentance = eachWord.map((elem, ind) => {
//   let eachLetter = elem.split("");
//   let capitalizedLetter = eachLetter[0].toLocaleUpperCase()
//   // console.log(capitalizedLetter);
//   eachLetter.splice(0, 1, capitalizedLetter)
//   console.log();
//   return eachLetter.join("")
// })

// console.log(CapitalizedSentance.join(" "));