import { tags, dat } from './data.js'


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
    const divs = document.getElementsByClassName('cheese')
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

export class MyTags extends HTMLFormElement {
  render() {
    for (const name of tags) {
      this.appendChild(new MyCheck().render(name))
    }
  }
  onChange() {
    const data = new FormData(this) 
    console.log(data.getAll('tags'))
  }
  connectedCallback() {
    this.onchange = this.onChange
    this.setAttribute('class', 'my-tags')
    this.render()
  }
}
customElements.define('my-tags', MyTags, {extends: 'form'})


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
    for (const value of data) {
        console.log(value)
        const myList = new createList(value)
        const divE = myList.createDivElement()
        divE.setAttribute(`class`, `cheese`)
        divE.setAttribute(`data-index`, `${value.tags}`)
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
