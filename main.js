// import { List } from './cheese.js';
import { tags, dat } from './data.js';

class Filter {
  constructor(tags) {
    this.nav = document.createElement('nav');
    this.tags = tags;
  }
  createButton() {
    for (let key in this.tags) {
      const button = document.createElement('button');
      button.innerHTML = `${this.tags[key]}`;
      button.setAttribute(`class`, `button-filter`);
      button.addEventListener('click', this.onClickFilter);
      this.nav.appendChild(button);
    }
    return this.nav;
  }

  onClickFilter(event) {
    const divs = document.getElementsByClassName(`cheese`);
    const clickedButton = event.target;
    console.log(clickedButton.textContent);
    for (let i in divs) {
      let result = divs[i].textContent.includes(clickedButton.textContent);
      if (result) {
        divs[i].style.display = 'block';
        } else {
        divs[i].style.display = 'none';
      }
    }
  }
}

const myFilter = new Filter(tags);
const buttons = myFilter.createButton();
document.body.appendChild(buttons);

class createList {
  constructor(obj) {
    this.divE = document.createElement('div');
    this.obj = obj;
  }
  createDivElement() {
    for (let [key, value] of Object.entries(this.obj)) {
      const pE = document.createElement('p');
      pE.innerText = `${key}: ${value}`;
      this.divE.appendChild(pE);
    }
    return this.divE;
  }
}


function fetchData() {
  return new Promise((resolve, reject) => {
    let data = dat;
    resolve(data);
    reject('Ошибка получения данных');
  });
}

const main = document.body.appendChild(document.createElement('main'));

fetchData().then(data => {
    for (const prop in data) {
        // let che = new List(array[prop]);
        console.log(data[prop]);
        const myList = new createList(data[prop]);
        const divE = myList.createDivElement();
        divE.setAttribute(`class`, `cheese`);
        main.appendChild(divE);
    };
});

// createDivElement() {
//   for (let key in this.obj) {
//     const pE = document.createElement('p');
//     pE.innerText = `${key}: ${this.obj[key]}`;
//     this.divE.appendChild(pE);
//   }
//   return this.divE;
// }

class MyTags extends HTMLElement {
  constructor(tags) {
    super();
    this.tags = tags;
    this.addEventListener('click', () => {
      this.handleClick();
    });
  }

  handleClick() {
    alert('Button clicked!');
  }

  // get text() {
  //   return this.getAttribute('text');
  // }

  // set text(value) {
  //   this.setAttribute('text', value);
  //   this.render();
  // }

  render() {
      this.innerHTML = `<button class='button-filter'>${this.tags}</button>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-tags', MyTags);