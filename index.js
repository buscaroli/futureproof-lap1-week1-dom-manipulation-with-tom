const header1 = document.querySelector('h1')
const header2 = document.querySelector('h2')

const link1 = document.querySelector('#link-1')
const link2 = document.querySelector('#link-2')
const link3 = document.querySelector('#link-3')

const section2 = document.querySelector('#section-2')

const paragraph1 = document.querySelector('#paragraph-1')
const paragraph2 = document.querySelector('#paragraph-2')
const paragraph3 = document.querySelector('#paragraph-3')

// console.log(header1)
// console.log(header2)
// console.log(link1)
// console.log(link2)
// console.log(link3)
// console.log(section2)

// change BG colour of h1 when clicked
header1.addEventListener('click', () => {
  header1.style.backgroundColor = 'yellow'
})

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
let isOn1 = true

// change BG colour of paragraphs
link1.addEventListener('click', () => {
  // styleToggle(paragraph1)
  // console.log(paragraph1)

  let fontSize = window
    .getComputedStyle(paragraph1, null)
    .getPropertyValue('font-size')
  // console.log('defaultSize: ', fontSize)

  let fontWeight = window
    .getComputedStyle(paragraph1, null)
    .getPropertyValue('font-weight')
  // console.log('fontWeight: ', fontWeight)

  console.log(fontWeight)

  if (isOn1) {
    paragraph1.style.fontSize = '30px'
    paragraph1.style.fontWeight = 700
  } else {
    paragraph1.style.fontSize = '20px'
    paragraph1.style.fontWeight = 400
  }
  isOn1 = !isOn1

  // fontSize === '30px'
  //   ? (paragraph1.style.fontSize = '20px')
  //   : (paragraph1.style.fontSize = '30px')

  // fontWeight === 'bold'
  //   ? (paragraph1.style.fontWeight = 200)
  //   : (paragraph1.style.fontWeight = 700)
})

// function styleToggle(element) {
//   let fontSize = window
//     .getComputedStyle(element, null)
//     .getPropertyValue('font-size')
//   let fontWeight = window
//     .getComputedStyle(element, null)
//     .getPropertyValue('font-weight')
//   console.log(fontSize)
//   // console.log(fontWeight)

//   element.fontSize === fontSize
//     ? (element.style.fontSize = '40px')
//     : (element.style.fontSize = fontSize)
//   console.log('newSize: ', element.fontSize)

//   element.fontWeight === fontWeight
//     ? (element.style.fontWeight = 'bold')
//     : (element.style.fontWeight = fontWeight)
// }
