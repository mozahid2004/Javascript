/**

A Conditional statement lets your code make decisions . It checks if something is true or
false , and then runs certain code based on that


1.if Statement
2.if...else Statement
3.if...else if...else (Also called "Else If Ladder")
4.Nested if Statements
5.switch Statement
6.Ternary Operator [? :] (short form)


*/

/* 1.if Statement */

// let prodectInstock = 0;

// if (prodectInstock == 0) {
//   console.log("Product is out of Stock");
// }


// ====================================


/* 2.if...else Statement */

// let wheather = "rainy"

// if(wheather == "rainy"){
//   console.log("Take umbrella");
// }else{
//   console.log("Enjoy Sunny Shine");
// }


/* 3.if...else if...else (Also called "Else If Ladder") */

let score = 50;

// if(score>=80){
//   console.log("Grade : A");
// }else if(score >=60){
//   console.log("Grade : B");
// }else if(score >= 40){
//   console.log("Grade : C");
// }else{
//   console.log("Fail");
// }

/**   4.Nested if Statements  */

let age = 0;
let hasID = false;

// if(age >= 18){
//   if(hasID){
//     console.log("You can GO...");
//   }else{
//     console.log("You need ID...");
//   }
// }else{
//   console.log("You are too younger to go..");
// }

/**  5.switch Statement */

let color = "green"

// switch(color){
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Slow");  
//     break;
//   case "green":
//     console.log("Go");  
//     break;

//   default:
//     console.log("Invalid color");

// }

/**  6.Ternary Operator [? :] (short form) */

let isLoggedIn = false;

let message = (isLoggedIn) ? "Welcome Admin" : "Please Login"

// console.log(message);


/**  Challenge 1:
Scenario: A website gives discounts based on the total shopping cart amount.

Question:

Write a program where:
If the cart value is less than $50, no discount is applied.
If the cart value is between $50 and $100, apply a 10% discount.
If the cart value is more than $100, apply a 20% discount.
Display the final cart total after the discount. 
*/

let cartValue = 200;
let discount;
let finalPrice;

// if (cartValue <= 50) {
//   finalPrice = cartValue
//   console.log(cartValue, discount, finalPrice);
// } else if (cartValue >= 50) {
//   discount = cartValue * 0.1;
//   finalPrice = cartValue - discount
//   console.log(cartValue, discount, finalPrice);
// } else if ( cartValue <= 100) {
//   discount = cartValue * 0.2;
//   finalPrice = cartValue - discount
//   console.log(cartValue, discount, finalPrice);
// } else {
//   console.log("Something went wrong");
// }


/** Challenge 2:

Scenario: On a video-streaming platform, verify user access to premium content.

Question:

Write a program to check if a user has a valid subscription. If the user has a subscription, further check if the subscription is "premium" or "standard".
If "premium", display "Access to all content".
If "standard", display "Access to limited content".
If the user doesn't have a subscription, display "Please subscribe to access content.".

*/

let hasSubscription = true;
let subscriptionType = "premium";


// if(hasSubscription){
//   if(subscriptionType == "premium"){
//     console.log("Acess to all content");
//   }else  if(subscriptionType == "standard"){
//     console.log("Access to limited content");
//   }else{
//     console.log("Not valid plan");
//   }
// }else{
//   console.log("Please Subscribe to enjoy to premium content");
// }