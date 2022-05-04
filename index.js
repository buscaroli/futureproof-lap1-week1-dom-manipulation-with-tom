// creating the references for the required elements
const header1 = document.querySelector('h1')
const header2 = document.querySelector('h2')

const link1 = document.querySelector('#link-1')
const link2 = document.querySelector('#link-2')
const link3 = document.querySelector('#link-3')

const section2 = document.querySelector('#section-2')

const paragraph1 = document.querySelector('#paragraph-1')
const paragraph2 = document.querySelector('#paragraph-2')
const paragraph3 = document.querySelector('#paragraph-3')

// change BG colour of h1 when clicked
header1.addEventListener('click', () => {
  header1.style.backgroundColor = 'yellow'
})

// restore the BG colour og the h1 when the mouse leaves its area
header1.addEventListener('mouseleave', () => {
  header1.style.backgroundColor = 'white'
})

// change text of h2 when clicked
header2.addEventListener('mouseover', () => {
  header2.textContent = 'Hello and Welcome!'
})

// add a paragraph to section-2
document.addEventListener('keypress', addParagraph)
function addParagraph(e) {
  console.log()
  let newParagraph = document.createElement('p')
  newParagraph.textContent = String.fromCharCode(e.keyCode)
  return section2.appendChild(newParagraph)
}

// toggler for text size and font weight of the paragraphs
// NB toggle can't be a boolean as it would be passed as a value
// and couldn't be modified from within a function.
// By making it an object it will be passed by reference
let toggle1 = { isOn: true }
let toggle2 = { isOn: true }
let toggle3 = { isOn: true }

// change BG colour of paragraphs
link1.addEventListener('click', () => {
  handleLink(paragraph1, toggle1)
})

link2.addEventListener('click', () => {
  handleLink(paragraph2, toggle2)
})

link3.addEventListener('click', () => {
  handleLink(paragraph3, toggle3)
})

// Utility Function
// this function takes one paragraph reference and one toggler reference
// and modifies the fontweight and fontsize properties of the paragraph
// The toggler keeps track of the state and needs to be a reference type
function handleLink(paragraph, toggle) {
  if (toggle.isOn) {
    paragraph.style.fontSize = '30px'
    paragraph.style.fontWeight = 700
  } else {
    paragraph.style.fontSize = '20px'
    paragraph.style.fontWeight = 400
  }
  toggle.isOn = !toggle.isOn
}
