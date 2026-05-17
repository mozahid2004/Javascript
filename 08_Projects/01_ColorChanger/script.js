let displayColor = document.querySelector('.displayColor');
let randombtn = document.querySelector('.randombtn');
let applyBtn = document.querySelector('.applyBtn');
let body = document.querySelector('body');
let inputColor = document.querySelector('.inputColor')
let magic = document.querySelector('.magic')


let colors = [
  "red",
  "blue",
  "black",
  "pink",
  "brown",
  "white",
  "green",
  "yellow",
  "orange",
  "purple",
  "violet",
  "indigo",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "navy",
  "olive",
  "teal",
  "gold"
];
let randomNumber;
let randomColor = ""

randombtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * colors.length)

  displayColor.innerHTML = `Color Name : ${colors[randomNumber]}`
  randomColor = colors[randomNumber]
  console.log(colors[randomNumber]);
})
// =========
applyBtn.addEventListener('click', () => {

  let inputValue = inputColor.value


  if (randomColor) {
    body.style.backgroundColor = `${randomColor} `
    console.log(randomColor);
    randomColor = inputValue
  }


  if (inputValue) {
    body.style.backgroundColor = `${inputValue}`
    displayColor.innerHTML = `Color Name : ${inputValue}`
    inputColor.value = ""
    console.log(inputValue);
  }

})
// ==========



magic.addEventListener('click', () => {

  let hexcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  let generatedHex = [];

  for (let i = 0; i <= 5; i++) {
    ch = hexcode[Math.floor(Math.random() * hexcode.length)]
    generatedHex.push(ch)
  }
  console.log(generatedHex.join(''));
  let finalColor = `#${generatedHex.join('')}`

  magic.addEventListener('click', () => {

  })

  body.style.backgroundColor = `${finalColor}`
  displayColor.innerHTML = `Color Name : ${finalColor}`
})