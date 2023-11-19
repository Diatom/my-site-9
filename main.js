import { tags, dat } from './data.js'


export class MyButton extends HTMLButtonElement {
  render(name) {
    this.setAttribute('class', 'button-filter')
    this.textContent = name.trim()
    this.onclick = this.handleClick
    return this
  }
  handleClick(event) {
    const divs = document.getElementsByClassName('cheese')
    console.log(this.textContent)

    for (const elem of divs) {
      const data = elem.getAttribute('data-index')
      if (data.includes(this.textContent)) {
        elem.hidden = true
      } else {
        elem.hidden = false
      }
    }
  }
}
customElements.define('my-button', MyButton, {extends: 'button'})

export class MyTags extends HTMLElement {
  render() {
    for (const name of tags) {
      this.appendChild(new MyButton().render(name))
    }
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('my-tags', MyTags)


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

function fetchData() {
  return new Promise((resolve, reject) => {
    let data = dat
    resolve(data)
    reject('Ошибка получения данных')
  })
}

const main = document.body.appendChild(document.createElement('main'))

fetchData().then(data => {
    for (const prop in data) {
        console.log(data[prop])
        const myList = new createList(data[prop])
        const divE = myList.createDivElement()
        divE.setAttribute(`class`, `cheese`)
        divE.setAttribute(`data-index`, `${data[prop].tags}`)
        main.appendChild(divE)
    }
})


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


// function Test0() {
//   var bla = 10
//   console.log(bla)
//   var bla = 20
//   {
//     console.log(bla)
//   }
//   console.log(bla)
// }

// function Test1() {
//   const bla = 10
//   console.log(bla)
//   {
//     const bla = 20
//     console.log(bla)
//   }
//   console.log(bla)
// }

{
  const bla = `string`
  {
    const bla = `kek`
  }
}

// Test0()
// Test1()

export const bla = `string`

import*as self from './main.js'
globalThis.Main = self
await import(import.meta.url)
