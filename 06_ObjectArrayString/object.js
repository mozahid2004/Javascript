/** An object is a collection of key value pairs or stores related information as a set of key value
pairs. It's a way to group data and functions together. */

// let car = {
//   brand : "Toyata",
//   color : "red",
//   maxSpeed : 250,
//   drive : ()=>{
//     console.log("car is moving");
//   }
// }


/** 
 * what is differnce btn Properties , method and function 
 * 
    method - funtion inside object is called method.
    properties - its give you info like in objects
    funtion -  its a reusable  block of code 


 * */

// console.log(car.brand );

// dot notation and braacket notation

// let obj = {
//   name: "Mozahid",
//   age: 23,
//   city: "patna",
//   greet: function () {
//     console.log(`Assalamualaikum ${this.name} !!!!!`);
//   }
// }

// obj.state = "bihar" // add properties
// obj.age = 22, //update [properties]
// delete obj.city; // delete properties

// obj.greet()

// console.log(obj);

// -------------------------------------
// Methods in object

// let keys = Object.keys(obj)
// console.log(keys);

// let values = Object.values(obj)
// console.log(values);

// let entries = Object.entries(obj)
// console.log(entries);

// let copiesOfObj = {...obj}
// let copiesOfObj = {}
// Object.assign(copiesOfObj, obj)
// console.log(copiesOfObj);

// Object.freeze(obj) // Prevents any changes (no adding, removing, or modifying properties)
// obj.city = "Jharsuguda"
// obj.dob = 1990;

// console.log(obj);

// Object.seal(obj) // Prevents any changes (no adding, removing, or modifying properties)
// obj.city = "Jharsuguda"
// obj.dob = 1990;

// console.log(obj);

// console.log(obj.hasOwnProperty("class"));

// ===================================================

// destucturing 

// const student = {
//   name: "Mozahid",
//   roll: 29,
//   subject: ["Math", "Physics", "Chemistry"],
//   quote: function () {
//     console.log(`You will not succced without make changes \nin your Action ---${this.name}`);
//   }
// }

// console.log(student);
// // object -----------

// const { name, roll, subject } = student

// console.log(name);

// student.quote();

// // Array-------------
// const color = ["red", "green", "yellow"];
// const [stop, go, slow] = color;

// console.log(slow, stop, go);