import { tags, dat } from './data.js'
const hello = `(= Oh, hello! =)`
console.log(hello)


const notes = document.getElementById('notes')
const fet = await fetch (`/main.md`)
const body = await fet.text()
console.log(body)
notes.innerText = body

// Render filters
const divs = document.getElementsByClassName('cheese')

export class MyCheck extends HTMLInputElement {
  render(name) {
    this.name = 'tags'
    const label = document.createElement('label')
    this.type = 'checkbox'
    label.setAttribute('class', 'button-filter')
    this.value = name.trim()
    label.append(this, this.value)
    this.onchange = this.onChange
    return label
  }
  onChange(event) {
    // const divs = document.getElementsByClassName('cheese')
    console.log(this.value)

    for (const elem of divs) {
      const data = elem.getAttribute('data-index')
      if (data.includes(this.value)) {
        elem.hidden = false
      } else {
        elem.hidden = true
      }
    }
  }
}
customElements.define('my-check', MyCheck, {extends: 'input'})


// export class MyButton extends HTMLButtonElement {
//   render(name) {
//     this.setAttribute('class', 'button-filter')
//     this.textContent = name.trim()
//     this.onclick = this.handleClick
//     return this
//   }
//   handleClick(event) {
//     const divs = document.getElementsByClassName('cheese')
//     console.log(this.textContent)

//     for (const elem of divs) {
//       const data = elem.getAttribute('data-index')
//       if (data.includes(this.textContent)) {
//         elem.hidden = true
//       } else {
//         elem.hidden = false
//       }
//     }
//   }
// }
// customElements.define('my-button', MyButton, {extends: 'button'})


// Render form
export class MyTags extends HTMLFormElement {
  render() {
    for (const name of tags) {
      this.appendChild(new MyCheck().render(name))
    }
  }
  onChange() {
    const data = new FormData(this) 
    for (const elem of divs) {
      if (data.getAll('tags').length < 1) {
        elem.hidden = false
        console.log("FormData is empty")
      } else {
        console.log("FormData contains data")
      }
    }
    console.log(data.getAll('tags'))
  }
  connectedCallback() {
    this.onchange = this.onChange
    this.setAttribute('class', 'my-tags')
    this.render()
  }
}
customElements.define('my-tags', MyTags, {extends: 'form'})


// Cheese cards
const main = document.body.querySelector('main')

class createList {
  constructor(obj) {
    this.divE = document.createElement('div')
    this.obj = obj
  }
  createDivElement() {
    for (let [key, value] of Object.entries(this.obj)) {
      const pE = document.createElement('p')
      pE.innerText = `${key}: ${value}`
      this.divE.appendChild(pE)
    }
    return this.divE
  }
}
// const main = document.body.appendChild(document.createElement('main'))


class CheeseList extends HTMLElement {
  render() {
    for (const value of dat) {
      console.log(value)
      const myList = new createList(value)
      const divE = myList.createDivElement()
      divE.setAttribute(`class`, `cheese`)
      divE.setAttribute(`data-index`, `${value.tags}`)
      this.appendChild(divE)
    }
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('cheese-list', CheeseList)
const myList = new CheeseList()
main.appendChild(myList)


// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let data = dat
//     resolve(data)
//     reject('Ошибка получения данных')
//   })
// }


// fetchData().then(data => {
//     for (const value of data) {
//         console.log(value)
//         const myList = new createList(value)
//         const divE = myList.createDivElement()
//         divE.setAttribute(`class`, `cheese`)
//         divE.setAttribute(`data-index`, `${value.tags}`)
//         main.appendChild(divE)
//     }
// })


// fetchData().then(data => {
//   for (const value of data) {
//       console.log(value)
//       const myList = new createList(value)
//       const divE = myList.createDivElement()
//       divE.setAttribute(`class`, `cheese`)
//       divE.setAttribute(`data-index`, `${value.tags}`)
//       main.appendChild(divE)
//   }
// })


// Search
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")

function searchData(input) {
  const divs = document.getElementsByClassName('cheese')
  for (const elem of divs) {
    let result = elem.innerHTML.toLowerCase().includes(input)
    if (result) {
      elem.hidden = false
    } else {
      elem.hidden = true
    } 
  }
}
searchButton.addEventListener('click', () => {
  const userInput = searchInput.value.toLowerCase()
  searchData(userInput)
})

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      document.getElementById('searchButton').click()
      event.preventDefault()
  }
})


//Test
{
  const bla = `string`
  {
    const bla = `kek`
  }
}

export const bla = `string`

import*as self from './main.js'
globalThis.Main = self
await import(import.meta.url)



