// console.log(window);

// console.log(document)
// console.dir(document)

// const h2 = document.querySelector("h2")
// console.log(h2);

// const h2 = document.querySelectorAll("h2")
// console.log(h2);

// ==============Selectors=================

/*
  * 5 ways to select Elemeents
     - getElementsByTagName
     - getElementById
     - getElementsByClassName
     - querySelector
     - querySelectorAll
 */

// let a = document.getElementsByTagName("h1")
// let b = document.getElementsByTagName("h2")
// console.log(a, b);

// let a = document.getElementById("a")
// console.log(a);


// let a = document.getElementsByClassName("hii")
// console.log(a);

// / const h2 = document.querySelector("h2")
// console.log(h2);

// const h2 = document.querySelectorAll("h2")
// console.log(h2);

// ==================Menupulating HTML========================

/*  
     <h1 class="heading" > Connected </h1>

     - tagName  
     - text
     - element
     - html / multiple elememts
     - atributes



*/

// let tag = document.querySelector('h1')
// console.log(tag.tagName); // tagname
// console.log(tag.nodeName); // tagname, commentNode, textNode


// tag.innerText = "I will Succced"
// tag.innerHTML = "<p>Allahamdulliah</p>"

// console.log(tag.innerText);
// console.log(tag.innerHTML);
// console.log(tag.textContent);


// ===================Insert Element==========================

// let div = document.querySelector("div")
// let para = document.createElement('p')

// para.innerHTML = "Para From Append Method"
// div.append(para) // last me add inside elemnt
// div.prepend(para) // first me add inside elemnt

// div.after(para) // outside the elem
// div.before(para) // outside the elem

// div.insertAdjacentElement("beforebegin",para) // out
// div.insertAdjacentElement("beforeend",para) // in
// div.insertAdjacentElement("afterend",para) //out
// div.insertAdjacentElement("afterbegin",para) //in 

// div.remove()

// let parentNode = para.parentNode

// console.log(parentNode);

// ================Atributes=================

// getAttribute (attr ): To get the attribute value
// setAttribute (attr , value): To set the attribute value

// let div = document.querySelector('div');
// console.log(div.getAttribute('class'));
// console.log(div.attributes.class.value);
// console.log(div.attributes.title);
// console.log(div.attributes);


// let classValue = div.attributes.class.value

// div.setAttribute('class', `${classValue} random`)
// console.log(div.attributes.class.value);


// ====================chnaging the CSS=================

/**  
       1.Using attribute method
       2.Using style
       3.Using cssText property
       4.Using className property
       5.Using clasList property : add(), remove(), toggle(), contains()
*/
// ============Event Handling============================

// let btn2 = document.querySelector('#btn2');
// btn2.style.padding = '10px 40px'

// btn2.addEventListener('click', () => {
//      console.log('clicked by dabao');
// })

// let div = document.querySelector('.box')
// let btn = document.querySelector('.btn')

// console.log(div, btn);

