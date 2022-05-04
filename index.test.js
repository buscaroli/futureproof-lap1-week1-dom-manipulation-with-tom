/**
 * @jest-environment jsdom
 */

const { exportAllDeclaration } = require('@babel/types')
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8')

describe('testing index.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
  })

  it('tests there is a main element', () => {
    const main = document.querySelector('main')
    expect(main).toBeTruthy()
  })

  it('tests the title is DOM Manipulation and Testing', () => {
    const title = document.querySelector('title')
    expect(title.textContent).toEqual('DOM Manipulation and Testing')
  })

  it('tests there are three links in the page', () => {
    const links = document.querySelectorAll('li')
    expect(links.length).toEqual(3)
  })

  it('tests the logo has a text of DOM with TOM', () => {
    const logo = document.querySelector('.title')
    expect(logo.textContent).toEqual('DOM with TOM')
  })

  it('tests the first anchor tag has a text of One', () => {
    const anchor1 = document.querySelectorAll('a')[0]
    expect(anchor1.textContent).toEqual('One')
  })

  it('tests the first div to have a class of container', () => {
    const div1 = document.querySelector('div')
    expect(div1.classList.contains('container')).toBeTruthy()
  })
})
