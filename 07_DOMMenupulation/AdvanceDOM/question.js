// 1. Create a paragraph with text  “mai tumse pyar nahi karta hun” and add background color to black and font color to green using javascript

// let div = document.querySelector('div')
// console.log(div);

// div.innerHTML = "hii"

// let para = document.createElement('p')
// para.style.padding = '10px';
// para.style.fontSize = '25px'
// para.style.textAlign = 'center'
// para.style.color = 'rgba(0,255,0, 0.9)'
// para.innerHTML = "mai tumse pyar nahi karta hun";


// 2. Insert a button with text “click me” as the first element inside the paragraph created in 1st question.

// let btn = document.createElement('button')
// btn.innerHTML = "click me"
// btn.style.margin = "30px"
// btn.style.marginLeft = "30%"
// btn.style.padding = "8px 20px"
// btn.style.fontSize = "20px"
// div.after(btn)

// btn.addEventListener('click', () => {
//   alert("btn Clicked")
//   div.before(para)
// })

// 3. Create a <div> tag in html and give it a class & some styling. Now create a new class in css and try to append this class to the <div> element.

// let div = document.querySelector("div")

// let classValue = div.getAttribute('class')

// console.log(classValue);

// div.setAttribute('class', `${classValue} random`)

// 4.Create a function that takes node and newTagName and replace the node from the new node with changed tag name in the DOM.

// let preNode = document.querySelector('.heading2')

// let replaceTag = (oldNode, newTagName) => {
//   console.log(oldNode, newTagName);


//   let createdTag = document.createElement(newTagName)
//   // createdTag.innerText = "Para"


//   let text = preNode.innerHTML
//   let nodeAtrr = Object.entries(oldNode.attributes)
//   nodeAtrr.forEach((atrr) => {
//     console.log(atrr[1]);
//     let setattrToNewTag = atrr[1].name
//     let attriValue = atrr[1].value
//     console.log(setattrToNewTag, attriValue);
//     createdTag.setAttribute( setattrToNewTag, attriValue)
//     return atrr[1]
//   })
//   createdTag.innerHTML = text
//   preNode.before(createdTag)
//   preNode.replaceWith(createdTag)
// }

// replaceTag(preNode, 'Sahil')

// ============================================================

// 1.Create a simple website with theme changing functionality.

// let webpage = document.querySelector('.websiteTheme');
// let themechnager = document.querySelector('#themeChanger');
// themechnager.style.margin = '50%'
// themechnager.style.padding = '2px 30px'

// themechnager.addEventListener('click', () => {

//   webpage.classList.toggle('websiteTheme');


// })

// 1.Build an increment decrement counter similar to what you see in the shopping cart on Amazon or Flipkart.

// let incBtn = document.querySelector('.incButton')
// let displayNumber = document.querySelector('span')
// let decBtn = document.querySelector('.decButton')

// let counter = 1;
// // displayNumber.innerHTML = counter
// incBtn.addEventListener('click', () => {
//   if (counter == 10) {
//     // displayNumber.innerHTML = 'max'
//   }else{
//     counter++
//     console.log(counter);
//     displayNumber.innerHTML = counter
//   }


// })
// decBtn.addEventListener('click', () => {
//   if (counter == 1) {
//     // displayNumber.innerHTML = 'min'
//   }else{
//     counter--
//     console.log(counter);
//     displayNumber.innerHTML = counter
//   }
// })

// 2.Create a simple form and display the submitted details on the webpage. Ensure that if any field is left empty, the form should not be submitted.


// let userName = document.querySelector('#name')
// let mobile = document.querySelector('#mobile')
// let course = document.querySelector('#course')
// let submitBtn = document.querySelector('#submit')
// let displayOnsite = document.querySelector('.displayOnsite')



// submitBtn.addEventListener('click', (eventObj) => {

//   eventObj.preventDefault();

//   let uservalue = userName.value
//   let mobileValue = mobile.value
//   let courseValue = course.value

//   if (userName === "" || mobileValue === "" || courseValue === "") {
//     alert('All fields Required')
//   } else {
//     displayOnsite.innerHTML = `
//     <h3>User Details</h3>
//     <p>Name : ${uservalue}</p>
//     <p>Mobile : ${mobileValue}</p>
//     <p>Course : ${courseValue}</p>
//     `

//     userName.value = ""
//     mobile.value = ""
//     course.value = ""
//   }



// })