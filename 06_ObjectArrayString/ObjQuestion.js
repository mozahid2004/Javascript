/*
 
1.Create a person object with properties: name, age, and city. Then
a)Log each property as: value of “name” property is “manas” using loop.
b)Add a new property called email to the person object.
c)Delete “city” property from person object.

 */

// const obj = {
//   name: "mozahid",
//   age: 22,
//   city: "patna"
// }

// let value = Object.entries(obj);

// console.log(value);

// value.forEach((elem) => {
//   console.log(`key is ${elem[0]} value is ${elem[1]}`);
// })

// for(key in obj){
//   console.log(`key is ${key} value is ${obj[key]}`);
// }

// obj.email = "mozahidizhar54@gmail.com"

// console.log(obj);

// delete obj.city

// console.log(obj);

// 2.Create a function that takes an object with firstName , middleName , lastName properties and returns the full name.

// let obj = {
//   fisrtName: "Mozahid",
//   middleName: "Sazaziya",
//   lastName: "Izhar",
// }

// const { fisrtName, middleName, lastName } = obj

// console.log(fisrtName, middleName, lastName );


// let fullName = (obj) => {

//   let fullName = Object.values(obj)
//   return fullName.join(" ")

// }

// console.log(fullName(obj));

// 3. Write a function that takes object and returns the number of properties in an object.

// let obj = {
//   name:"Mozahid",
//   qualification: "Gradutate",
//   religion: "Muslim"
// }

// let properties = (prams)=> {
//   console.log(Object.keys(prams).length);
// }

// properties(obj)

// 4.Write a function that returns an array of names of users who have the role “admin”.

// const users = [
//   { name: "Alice", role: "admin" },
//   { name: "Bob", role: "user" },
//   { name: "Charlie", role: "user" },
//   { name: "Danish", role: "admin" },
// ]

// let findAdmin = (param) => {

//   param.forEach(element => {

//     if(element.role === "admin"){
//       console.log(element.name);
//     }
//   });

// }

// findAdmin(users)

//5.Write a function searchProducts (products, keyword) that returns an array of products whose name includes the given keyword (case insensitive). 

// const products = [
//   { id: 1, name: "iphone 14" },
//   { id: 2, name: "Samsumg Galaxy" },
//   { id: 3, name: "Google Pixel" },
// ];

// let searchProducts = (prams, searchKeyword) => {
//   prams.forEach(element => {


//     if(element.name.toLocaleLowerCase() == searchKeyword.toLocaleLowerCase()){
//         console.log("Yes Found it !!!");
//         console.log(element);
//     }

//   });
// }

// searchProducts(products, "Iphone 14")

// =============

// let searchProducts = (prams, searchKeyword) => {
//   let filterArray = prams.filter(element => {

//     let productName = element.name.toLocaleLowerCase()
//     let FindThisKeyword = searchKeyword.toLocaleLowerCase()

//    if(productName.includes(FindThisKeyword)){
//     console.log(productName);
//    }


//     return productName.includes(FindThisKeyword)
//   });


//   console.log(filterArray);
// }

// searchProducts(products, "1")

// 6. Write a function groupByPost (comments) that returns an object grouping comments by postId

const comments = [
  { postId: 1, text: "Great post!" },
  { postId: 2, text: "Thanks" },
  { postId: 3, text: "Very HelpFull" },
  { postId: 2, text: "Very Fabulous" },
]



// let groupByPost = (param) => {

//   let groupedComments = {}

//   console.log(param);

//   param.map((obj) => {

//     if (groupedComments.hasOwnProperty(obj.postId)) {
//         groupedComments[obj.postId].push(obj.text)
//     } else {
//       groupedComments[obj.postId] = [obj.text]
//     }


//   })
//   console.log(groupedComments);
// }

// groupByPost(comments)


// let groupByPost = (pram) => {

//   let groupedComments = {}

//   pram.map((obj) => {
//     if (groupedComments.hasOwnProperty(obj.postId)) {
//       groupedComments[obj.postId].push(obj.text)
//     } else {
//       groupedComments[obj.postId] = [obj.text]
//     }
//   })
//   console.log(groupedComments);
// }

// groupByPost(comments)

// 7.Write a function buildQuery (params) that returns

// const params = {
//   search: "lapotop", 
//   page: 2,
//   sort: "price",
//   falna: "dikha "
// };

// let buildQuery = (params) => {
//   console.log(params);
//   let searchItems = Object.entries(params)
//   let eachComponent = searchItems.map((elm) => {
//     return elm.join("=")
//   })
//   console.log(eachComponent.join("&"));
// }

// buildQuery(params)