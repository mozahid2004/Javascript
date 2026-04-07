/**  1.Calculate sum of first ‘n’ numbers. */

// let n = 10
// let result = 0;

// for(let i = 0 ; i <= n ; i++){
//   result += i
//   console.log(result);
// }

/** 2. Calculate the sum of numbers from ‘m’ to "n" */

// // Method 1:

// let m = 1;
// let n = 10;
// let result = 0;

// for (let i = m; i <= n ; i++){
//   result += i
// }
// console.log(result);

// Method 2:

// let n = 10;
// let m = 1;
// let result = 0;
// let i = m;

// while(i <= n){
//   result+=i
//   i++
// }

// console.log(result);

/**  3.Print all odd numbers from 0 to ‘n’. */

// Method 1:

// let n = 3;

// for(let i = 0 ; i<= n ; i++){
//   console.log(i);
// }

// Method 2:

// let n = 6;
// let i = 0;

// while (i < n) {
//   console.log(i);
//   i++
// }

/**  4.Create a “Number Knock” game. (ask the user to keep guessing the number
until the user enters correct guess) . */

// let guessNumber = Number(prompt("Guess the Number 1 to 10"))
// computerGeneratedNumber = Math.floor(Math.random() * 10) + 1


// while(guessNumber !== computerGeneratedNumber){
//   guessNumber = Number(prompt("Guess the Number 1 to 10"))

//    if(guessNumber > computerGeneratedNumber){
//     alert("too high number");
//    }else if(guessNumber < computerGeneratedNumber){
//     alert("too low number");
//    }

// }
// alert("Congratulation! \n Number Matched..");
// console.log(guessNumber);
// console.log(computerGeneratedNumber);

/**  5.Simple Password Checker (Fixed Attempts) */

// let Password = 9090;
// let enterPassword;
// let attempts = 0;

// while (attempts < 3) {

//   enterPassword = Number(prompt("Enter password"));

//   if (Password == enterPassword) {
//     console.log("Login Sucessfull!!");
//     break;
//   } else{
//     attempts++;
//     alert(`Wrong password! Attempts left: ${3 - attempts}`);

//   }


// }
// if (attempts === 3 && enterPassword !== Password) {
//   alert("Max attempts reached. Please try again later.");
// }



/** 6.Create a program to find the factorial of ‘n’. */

// let n = 3;
// let result = 1;


// for (let i = 1; i <= n; i++) {

//   console.log(i);
//   result *= i

// }

// console.log("Result :", result);

/** Print the following pattern. (build it for nth numbers)
 * 
 * 
 *          1 
 *          1  2
 *          1  2  3
 *          1  2  3   4
 *          1  2  3   4  5
  */
/** Pattern for nth number */

// let n = 2;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     // row += j + "  ";
//     row = row + j + "  "
//   }

//   console.log(row);
// }


// self try

// let n = 4;

// for (let i = n; i >= 1; i--) {
//   let row = ""
//   for (let j = 1; j <= i; j++) {
//     row = row + j + "  "
//   }
//   console.log(row);
// }

/**  
 * Build a Simple Text Based Adventure Game
 * 
       "You wake up in a dark forest...."
       "Do you go 'left' or 'right'?"
       "after choosing left:"
       "You walk into a swamp..."
       "You see something shiny in the mud. Do you pick it up? (yes or no)"
       "If yes:" "It's a magic stone! You are teleported to safety. You win!"
       "if no":" "You sink slowly into the mud. Game over."
       "after choosing right:"
       "You find a cave..."
       "Do you enter the cave? (yes or no)"
       "if yes:" "A dragon wakes up and chases you away. You barely escape!"
       "If no:" "You set up camp outside the cave. A peaceful night under the stars. You win!"
       "Do you want to play again? (yes or no)"

 */

/*

let playAgain;
let darkForest ;
console.log(darkForest);


do {

  if (darkForest) {
    darkForest = confirm("You wake up in a dark forest....");
    const pickUp = confirm("shiny in the mud. Do you pick it up? (yes or no)")
    if (pickUp) {
      alert("It's a magic stone! You are teleported to safety. You win!");
      playAgain = confirm("Do you want to play again? (yes or no)");
    } else {
      alert("You sink slowly into the mud. Game over.");
      playAgain = confirm("Do you want to play again? (yes or no)");
    }

  } else {
    const cave = confirm("Do you enter the cave? (yes or no)")

    if (cave) {
      alert("A dragon wakes up and chases you away. You barely escape!");
      playAgain = confirm("Do you want to play again? (yes or no)");
    } else {
      alert("You set up camp outside the cave. A peaceful night under the stars. You win!");
      playAgain = confirm("Do you want to play again? (yes or no)");
    }
  }

} while (playAgain)

*/

let playAgain;

do {

  alert("You wake up in a dark forest...");

  let direction = prompt("Do you go 'left' or 'right'?");

  if (direction === "left") {

    alert("You walk into a swamp...");

    const pickUp = confirm("You see something shiny in the mud. Do you pick it up?");

    if (pickUp) {
      alert("It's a magic stone! You are teleported to safety. You win!");
    } else {
      alert("You sink slowly into the mud. Game over.");
    }

  } else if (direction === "right") {

    alert("You find a cave...");

    const cave = confirm("Do you enter the cave?");

    if (cave) {
      alert("A dragon wakes up and chases you away. You barely escape!");
    } else {
      alert("You set up camp outside the cave. A peaceful night under the stars. You win!");
    }

  } else {
    alert("Invalid choice! Please choose left or right.");
  }

  playAgain = confirm("Do you want to play again?");

} while (playAgain);