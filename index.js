const header1 = document.querySelector('h1')
const header2 = document.querySelector('h2')

const link1 = document.querySelector('#link-1')
const link2 = document.querySelector('#link-2')
const link3 = document.querySelector('#link-3')

const section2 = document.querySelector('#section-2')

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
header2.addEventListener('click', () => {
  header2.textContent = 'Hello and Welcome!'
})

// add a paragraph to section-2
document.addEventListener('keypress', addParagraph)
function addParagraph() {
  let newParagraph = document.createElement('p')
  newParagraph.textContent = `new paragraph!`
  return section2.appendChild(newParagraph)
}

// change BG colour of paragraphs
link1.addEventListener('click', (e) => {})
