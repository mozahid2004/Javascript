/* 1.Write a regular function that takes a string and returns it with the first letter capitalized.*/

// function capitalizedStr(str){
//     for(let ch of str){
//       console.log(ch.toUpperCase());
//     }
// }

// capitalizedStr("Mozahid")


/** 2.Show an alert message that says “Please login” after 5 seconds on your website. */

// setTimeout((() => {
//   alert("pls Login")
// }),3000)

/** 3.Make an arrow function that takes a price and a discount, and returns the price after
discount. */

// let finalPrice = (mrp, discount) => {

//   return mrp - ((discount / 100) * mrp)
// }

// console.log(finalPrice(1450,50));


/** 5.Write a function that takes a traffic light color and gives the correct instruction (e.g. "go"
for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else). */

const trafficInstruction = (color) => {
    switch(color){
      case "red" : console.log("Stop");
      break;
      case "green" : console.log("Goo..");
      break;
      case "yellow" : console.log("Caution");
      break;
      default:
        console.log("Invalid color");
    }
} 

trafficInstruction("green")