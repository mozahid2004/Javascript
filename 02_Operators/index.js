// The operator is a symbol that performs operation with some vlaue like :- +, -, *, /, !, =

// let result = 10 + 66

/** + is operator and 10 and 66 are value and also called operand */

// console.log(result);

/**  There are 7 types of opeator :-
 * Arithmetic
 * Assignment
 * Comparison
 * Logical
 * Increment & Decrement
 * Ternary
 * Bitwise
 */

// =================================================

// 1.Arithmetic Operator

let num1 = 10
let num2 = 40

// console.log( `Addition :- ${num2} + ${num1} = ${ num2 + num1} `);
// console.log( `Substaction :- ${num2} - ${num1} = ${ num2 - num1} `);
// console.log( `Multiplication :- ${num2} * ${num1} = ${ num2 * num1} `);
// console.log( `Division :- ${num2} / ${num1} = ${ num2 / num1} `);
// console.log( `Modulo (Remainder) :- ${num2} % ${num1} = ${ num2 % num1} `);
// console.log( `Exponent (Power) :- ${num2} ** ${num1} = ${ num2 ** num1} `);


/* 
Challenge1:
On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3).
Also, calculate a 10% discount on the total cost and display the discounted price. 
*/

let givenPrice = 150;
let quantity = 3;

let totalPrice = givenPrice * quantity
let discountedPrice = totalPrice * 0.1

let finalPrice = totalPrice - discountedPrice

// console.log("Total Price :- "  + "₹ " + totalPrice);
// console.log("Discounted Price :- " + "₹ "+ discountedPrice);
// console.log("Final Price :- " + "₹ " + finalPrice); //405

// ============================================================


// 2.Assignment Operator

// let age = 4
// we assign the age 22 in varible , age gets 22

// console.log("Age : " + age);

// age = age - 20; console.log("Age : " + age);

// age -= 2; console.log("Age : " + age);

// age += 100; console.log("Age : " + age);

// age *= 10; console.log("Age : " + age);

// ============================================================

// 3.Comparison operator

let a = 30;
let b = 200;


// console.log(a > b);  //false
// console.log(a < b);  //true
// console.log(a <= b); //true
// console.log(a >= b); //false
// console.log(a == b); //false
// console.log(a === b); //false
// console.log(a != b); //true
// console.log(a !== b); //true

// ===============================================

// 4.Logical Operator

/**  
 * AND ---> &&
 * OR ----> ||
 * NOT ---> !
 */

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log("-----------------");
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log("-----------------");
// console.log(!true);
// console.log(!false);


// Example :-

let x = 10;

// console.log(x <= 100 && x >= 0);
// console.log(x <= 100 || x >= 0);


// ==================================

// 5.Increment & Decrement

/**
 Increment and Decrement are further devided into two part pre-increment and post-increment and same for Decrement
    * pre increment or decremnt me pehle use karta hai varible phir increse ya decrese karta hai.
    * post increment or decremnt me pehle increse ya decrese karta phir use karta hai varible.

 */

let y = 20;

// console.log(y);    //20
// console.log(y--);  //20
// console.log(y++);  //19
// console.log(++y);  //21
// console.log("========================");
// console.log(--y); //20
// console.log(y--); //20
// console.log(y);   //19


// Simple Question :--

// let num = 10
// let result = num++ + --num + 20;
//              //10   +  10  + 20

//              console.log(result); //40



// ==============================================

// 6.Ternary Operator


/**
      condition ?  execute when condition is true  :  execute when condition is false
 */

// let result = age > 18 ? "Adult" : "Minor";

// console.log(result);


/**
 * Challenge2:
       On a booking website, check if the user's age is valid for booking:
       Age should be at least 18.
       Write a condition to check and display a message: "Eligible for booking" 
       if the user is 18 or older. "Not eligible for booking" otherwise.

 */

let age = 20;

// let result = age >= 18 ? "Eligible for booking" : "Not eligible for booking"

// console.log(result);

/**
 * Challenge 3
        On a login page, verify the user's credentials: 
        Check if username is not empty AND password is not empty (&& operator).
        If either is empty, display an error message: "Both fields are required."
 */

let username = "Moza";
let password = "2";

let msg = (username && password) ? "Login Successfull" : "Both fields are required"
// let msg = (username == "Moza" && password == "22") ? "Login Successfull" : "Both fields are required"

// console.log(msg);


/* Challenge 4 : 
      find the largest number form given number.
*/

let k = 10, l = 49, m = 9

let largestNum = (k > l) ? ((k > m) ? (k) : (m)) : ((l > m) ? (l) : (m))


// console.log(largestNum);


// 7.BITwise operator 









/**
 *   Truthy And Fasly
 *          
 *          Fasly :- false, 0, -0, undefined, null ,NaN , ""
 *          Truthy :- except above all are truthy
 */


// let result = ("") ? ("Statement 1") : ("Statement 2");
// let result = (null) ? ("Statement 1") : ("Statement 2");
let result = (NaN) ? ("Statement 1") : ("Statement 2");

console.log(result);