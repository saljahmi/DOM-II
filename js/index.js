// ### Task 2a: Create Unique Event Listeners

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some unique event types you could try to use:
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

// Note: Drag and drop is a bit more advanced than the others as it's not actually a single type of event but several, working together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// Your code goes here

// mouseenter, mouseout

const topLinks = document.querySelectorAll(".nav-link")

function makePurple(event){
    event.target.style.color = "purple";
    console.log('made it putple')
}
function makeBlack(event){
    event.target.style.color = "black"
}

topLinks.forEach(element => {
    element.addEventListener('mouseenter', makePurple)
    element.addEventListener('mouseout', makeBlack)
})

//click

const mainHeader = document.querySelector('.logo-heading')

function makeBolder(event){
    event.target.style.fontWeight = "bolder"
}

mainHeader.addEventListener('click', makeBolder)

//dblclick

const mainNav = document.querySelector('h2')

mainNav.addEventListener('dblclick', function (event){
    event.target.style.textAlign = "center"
})

//drag, dragend

const allImgs = document.querySelectorAll("img")

function makeRound(event){
    event.target.style.borderRadius = "50%";
}
function makeSquare(event){
    event.target.style.borderRadius = "0";
}

allImgs.forEach(element => {
    element.addEventListener('drag', makeRound)
    element.addEventListener('dragend', makeSquare)
})