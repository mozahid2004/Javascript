/** Q.1 Give choice to the user to select theme color and set the selected theme color and console it. */

// let color = prompt("Enter your theme light, Dark, Pink, Blue");

// switch (color) {
//   case "light":
//     console.log("light theme Changed Successfully");
//     break;
//   case "Dark":
//     console.log("Dark theme Changed Successfully");
//     break;
//   case "Pink":
//     console.log("Pink theme Changed Successfully");
//     break;
//   case "Blue":
//     console.log("Blue theme Changed Successfully");
//     break;

//   default:
//     console.log("Invalid theme Selected");
// }

/** Q.2 Find the smallest of three numbers. Numbers are given by the user. */

// let a = Number(prompt("Enter 1st Number"));
// let b = Number(prompt("Enter 2nd Number"));
// let c = Number(prompt("Enter 3rd Number"));

// // let smallestNum = 

// if (a < b) {
//   if (a < c) {
//     console.log("smallest Number :", a);
//   }
// } else if (b < c) {
//   console.log("smallest Number :", b);
// } else {
//   console.log("smallest Number :", c);
// }

/**
 * Q.3 Write a program to manage Role Based Access Control
       Given a user role ("admin", "editor", "viewer"):
       Admin: full access
       Editor: edit access
       Viewer: read only
       Any other: no access
       Use switch.
 */

// let role = ""

// switch (role) {
//   case "admin":
//     console.log("full access");
//     break;
//   case "editor":
//     console.log("edit access");
//     break;
//   case "viewer":
//     console.log("read only");
//     break;
//   default:
//     console.log("no access");
// }

/**  Q.4 Check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5,
"FizzBuzz" for both. */


let num = 94

// if (num % 3 == 0 && num % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (num % 5 == 0) {
//   console.log("Buzz");
// } else if (num % 3 == 0){
//   console.log("Fizz");
// }else{
//   console.log("Nither divisible by 3 nor 5");
// }

/** Q.5 Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using */

// let num1 = Number(prompt("Enter 1st Number"));
// let num2 = Number(prompt("Enter 1st Number"))
// let opeator = prompt("+ , - , * , /")
// let result;

// switch (opeator) {
//   case "+":
//     result = num1 + num2;
//     console.log(result);
//     break;
//   case "-":
//     result = num1 - num2
//     console.log(result);
//     break;
//   case "*":
//     result = num1 * num2
//     console.log(result);
//     break;
//   case "/":
//     result = num1 / num2
//     console.log(result);
//     break;

//   default:
//     console.log("Invalid Operator");
// }

/**
 * 
 * Q.6 Create a simple ATM program.
       User can choose:
       1. Check Balance
       2. Deposit
       3. Withdraw
       4. Exit
       Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show
       the message with a new balance. And in case of “Withdraw” if withdraw amount is greater than balance then or less
       than 1Rs then produce error otherwise withdraw amount and show remaining balance.
 */

let balance = 10000;
let amt;
let totalBalance;


let operation = prompt("1. Check Balance  2. Deposit  3. Withdraw   4. Exit")

// switch (operation) {
//   case "1":
//     console.log("Available Balance : ", balance);
//     console.log("Thank you for Choosing Us");
//     break;
//   case "2":
//     amt = Number(prompt("Enter Amout"))

//     totalBalance = amt + balance
//     console.log("Available Balance : ", totalBalance);
//     console.log("Thank you for Choosing Us");
//     break;
//   case "3":
//     Number(amt = prompt("Enter Amout"))
//     totalBalance = balance - amt
//     console.log("Available Balance : ", totalBalance);
//     console.log("Thank you for Choosing Us");
//     break;

//   case "4":
//     console.log("Thank you for Choosing Us");
//     break;

//   default: console.log("Choose the correct Option");
// }

if (operation == 1) {

  console.log("Available Balance : ", balance);
  console.log("Thank you for Choosing Us");

} else if (operation == 2) {

  amt = Number(prompt("Enter Amout"))
  if (amt <= 1) {
    alert("Amount is too low to Deposite");
  } else {
    totalBalance = amt + balance
    console.log("Available Balance : ", totalBalance);
    console.log("Thank you for Choosing Us");
  }

} else if (operation == 3) {

  amt = Number(prompt("Enter Amount"));
  if (amt > balance) {
    alert("Enter Amount is higher than Balnce");
  } else {
    totalBalance = balance - amt
    console.log("Available Balance : ", totalBalance);
    console.log("Thank you for Choosing Us");
  }

} else if (operation == 4) {

  console.log("Thank you for Choosing Us");

} else {

  console.log("Invalid Option");

}