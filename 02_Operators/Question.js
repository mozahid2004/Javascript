/* 1. Get user to input two number using prompt and print their possible arithmetic results.*/

// let a = Number(prompt("Enter number"));
// let b = Number(prompt("Enter number"))
// let calc = prompt("Enter + , - , * , /")
// let result;

// switch (calc) {
//   case "+":
//     result = a + b;
//     break;

//   case "-":
//     result = a - b
//     break;

//   case "*":
//     result = a * b
//     break;

//   case "/":
//     result = a / b
//     break;

//   default:
//     result = "Invalid Operator"

// }

// console.log(`${a} ${calc} ${b} = ${result}`);

/**2. Can you chain assignment operator ? */

// let c = 100
// let d = c
// let e = d

// console.log(c, d, e);


// let a = b = c = d = 200

// console.log(a, b, c, d);

/**3. Get user to input a number using prompt and check whether even or odd using ternary operator. */

// let a = Number(prompt("Enter a Number"));

// let result = (a % 2 == 0) ? "Even" : "Odd"

// console.log(result);

/**
 4. What is the final value of X ?

 */

// let x = 5;
// x += 3 //x = x + 3
// console.log(x); // 8
// x -= 2 // x = x - 2
// console.log(x); //6
// x *= 4
// console.log(x); //24
// x /= 6
// console.log(x); //4
// x %= 3 // x = x % 3
// console.log(x); //1


/** 5. Check if a number is within a range between 10 and 20 (inclusive) */

// let num = 14;

// let result = (num >= 10 && num <= 20) ? ("Yes, Number is in Range") : ("No, Number is in Range")

// console.log(result);

/** 6. Write a program to find the largest number between 3 numbers using ternary operator. */


// let a = 60, b = 40, c = 30

// let result = (a > b) ? ((a > c) ? (a) : (c)) : ((b > c) ? (b) : (c))

// console.log(result);


/**
 * 7. Take an email and password from the user. If the email or password is incorrect or does not match the stored values, displa y t he
      message "Invalid email or password." If both email and password match the stored values, display "You are logged in successfully"
 */
// let email = "mozahid12@gmail.com"
// let password = "212121"

// if(email == "mozahid12@gmail.com" && password == "212121"){
//   console.log("You are logged in successfully");
// }else{
//   console.log("Invalid email or password.");
// }

/** 
 * 8. What will be the output of the following  JavaScript code?
 
 */

// let a = 5, b = 3, c = 2;

// let result = a++ + --b * c-- - ++a + b-- / --c;
// //           5      2     2    7     2      0

// console.log("a : " + a); //7
// console.log("b : " + b); //1
// console.log("c : " + c); //0
// console.log("result : " + result); 


/**
 * 9. What will be the output of the following JavaScript code?
   
 * 
 */

let x = 10
let y = 5
let z = "10"

x += y * 2 
// x = x + (5 * 2)

let isEqual = x == z //false

let isStrictEqual = x === z; //false

let logicTest = (isEqual || isStrictEqual) && !(y > 10) // false

let result = logicTest ? ++x : --y; 

console.log("x : ",x); //20
console.log("y : ",y); //4
console.log("z : ",z); //10
console.log("isEqual : ",isEqual);  //false
console.log("isStrictEqual : ",isStrictEqual);  //false
console.log("logicTest : ",logicTest);  //false
console.log("result : ",result); //4
console.log("Type of z : ",typeof z); //string