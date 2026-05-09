/*
1.Create a program to take full name from user and generate a username start with @, followed by their full name and ends with underscore followed by thelength of full name.
2.Take a string and a character from the user and:
a)count how many times that character appears in the string.
b)Case Insensitive Version
c)Find All Occurrence Positions
3.Count the words present in a given string.
*/

// 1.Create a program to take full name from user and generate a username start with @, followed by their full name and ends with underscore followed by thelength of full name.

// let firstName = prompt("Enter FirstName")
// let lastName = prompt("Enter LastName")

let firstName = "Mozahid"
let lastName = "Izhar"

let FullName = `${firstName.trim()} ${lastName.trim()}`
//Name into UserName
let userName = `@${FullName.toLocaleLowerCase()}`

// length of UserNAME and remove Space from uSerNme
// console.log(userName.replace(" ", ""),"|", FullName.length);

//3.Count the words present in a given string.
// console.log("Word in Given Name :",FullName.split(" ").length);


/** 2.Take a string and a character from the user and:
a)count how many times that character appears in the string.
b)Case Insensitive Version
c)Find All Occurrence Positions */


// let str = prompt("Enter String...")
// let ltr = prompt("Enter Character...")
// let count = 0;

// console.log(str.split(""));

// for (ch of str) {

//   if (ch.toLocaleLowerCase() == ltr.toLocaleLowerCase()) {
//     // console.log(ch);
//     count++;
//   }

// }

// console.log(count);