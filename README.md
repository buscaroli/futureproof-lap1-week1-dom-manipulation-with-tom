# DOM Manipulation and testing

DOM Manipulation and testing with Jest.
Exercise assigned by the Instructors of the Futureproof Bootcamp (Auguste Cohort), lap1, week1, day2.

## Objective

**Working in pairs create a webpage that has:**

- A H1 tag
- A H2 tag
- A Header that contains a list of navigation items, styled to be horizontal across the top of the screen
  A- section which contains three paragraphs, each paragraph should correspond to an item on your header

**Create the following events on your webpage:**

- If a user clicks on the h1 tag, the background should change colour, if they move their mouse out of the space the background should return to the original colour.
- If a user hovers over a h2 tag replace the words inside it to contain a greeting
- If someone types a letter whilst viewing the webpage a new paragraph should be created and that letter should be added to it.
- If someone clicks on one of the navigation items the styling of the connecting paragraph should change to be more bold and be a larger font size. If they click again on the same navigation item, the paragraph should revert to original styling.

**Testing:**

- Take a look at the test suite in the demo code
- Try adding some Jest tests for the existing features in your webpage
- Add test(s) for a feature that you have not yet implemented - maybe an easter egg!
- Use your new test(s) to help you add the new feature

## Technology

- HTML and CSS
- Javascript
- Jest
- Jest-environment-jsdom
- watchify

## Results

The page works as expected.
I could have implemented dozens of tests by the objective of the exercise was to familiarise ourselves with the new technologies.
More challenging exercises will be given in the next few days.

## ⭐️ Interesting ⭐️

I originally had some repeating code that would manipulate the paragraphs when the corresponding link was clicked.
I created a function to reduce repetition (as per the DRY principle) and at first it wouldn't work.
After debugging with console.log I realised what the problem was:

```js
let toggle1 = true

function handleLink(paragraph, toggle) {
  if (toggle) {
    paragraph.style.fontSize = '30px'
    paragraph.style.fontWeight = 700
  } else {
    paragraph.style.fontSize = '20px'
    paragraph.style.fontWeight = 400
  }
  toggle.isOn = !toggle.isOn
}
```

As toggle was a boolean it was passed to handleLink as a value and the following expression couldn't modify it:

```js
toggle.isOn = !toggle.isOn
```

After realising this, I decided to make toggle a reference by initializing it as an Object.
The following code works and toggle can be modified from within the function 💪

```js
let toggle1 = { isOn: true }

function handleLink(paragraph, toggle) {
  if (toggle.isOn) {
    paragraph.style.fontSize = '30px'
    paragraph.style.fontWeight = 700
  } else {
    paragraph.style.fontSize = '20px'
    paragraph.style.fontWeight = 400
  }
  toggle.isOn = !toggle.isOn
```

## Thanks

The Webpage has a logo of **DOM with TOM** 😂 as a tribute to [Tom](https://github.com/tomhughes87) as a thanks for brainstorming the project with me 💪
