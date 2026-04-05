// Q1: How do you declare a variable in JavaScript?
// Solution :-
let alpha;


// Q2: What is the difference between var, let, and const?
let alpha1;
/** it cann't redecleared but reassign its is block  scope 
*/

var beta;

/** it can be redeclered also reassign its is not blocked scope. it pollute the code environment
*/

const pi = 3.14;

/** we use this to assign fixed variable like pi, price, signficant number and we have me initialize it with decleration we cant leave only with declaration
*/

// Q3: Can you change the value of a const variable?

/**No, We cant change the value of const variable
*/

const laysChips = 10;
// laysChips = 30; 
// TypeError: Assignment to constant variable.

// console.log(laysChips);

// Q4: What will happen if you use a variable without declaring it?

/** ReferenceError: fuits is not defined 
 */

// console.log(fuits);
// ReferenceError: fuits is not defined

// Q5: What is the default value of an uninitialized variable in JavaScript?

// let color;

/**
 * Undefined is the value of not initialized variable
 */

// color
// ReferenceError: color is not defined

// console.log(color);

// Q6: What are the primitive and non-primitive data types in JavaScript?

/*
 ** there are 2 types of data type :-
 *  Primitive :-----------
    * *There are 7 type of primitive data type :-
    * Number
    * null
    * string
    * symbol
    * boolean
    * bigInt
    * undefined
 *  Non-Primitive:---------------
    * Array
 */

// Q7: What is the difference between null and undefined?

/**
 * undefined :- when we just decleared the variable not initialized mean the value of variable is undefined or we can say absence of value
 * null :- it is a vlaue which denote nothing we can give this value to varible acording to need
 */

let v;

// console.log(v); //undefined

let w = null;

// console.log(w); //null

// Q8: Is JavaScript a statically typed or dynamically typed language?

/** JavaScrript is Dynimically typed language mean it can adjust it variable acroding to which value we are giving to variable we never say JS to which type of data type we are going to store in Variable like other programming language
 like example given blow :--
 */

let p = 100
let q = "Mozahid"
let r = true

//  console.log(typeof(p));
//  console.log(typeof(q));
//  console.log(typeof(r));

//  Q9: What will be the output of typeof null

/**  object, JavaScript shows some of the weird behavious this ois one of them ,it is a bug in JavaScript*/
// console.log(typeof(null)); //object

// Q10: What happens when you add a number and a string in JavaScript? 

let number1 = 100;
let number2 = "200"
let string = "Saima"

// console.log(  - number1 - number2 + string);
// console.log(  string + number1 + number2 );

// Q11: What is type coercion? Give an example.

let num1 = 10;
let str = "100"

/** when we add num and str it will concatinate but when we substract javascript will change str in number then it will substract */

// console.log(num1 + str);
// console.log(str - num1);

// Q12: How can you manually convert a string to a number in JavaScript?

let str2 = "200";

// console.log(typeof(str2));
// console.log(typeof(Number(str2)));

// Q13: What is the result of "5" - 3 in JavaScript?

let num3 = "5";
let num4 = 3

// console.log(num3 - num4);  //2 

// Q14: What is NaN in JavaScript, and how do you check if a value is NaN ?

/** 
 * 
*/

let num5 = "aaq100";

console.log(0/0);

console.log(typeof(Number(num5)));

// Q15: How do you check the type of a variable in JavaScript?

/**
 * use typeof() to check datatype in javaScipt
 */

let str3 = "moza"

console.log(typeof(str3));