import { tags, dat } from './data.js';

class MyTags extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      this.handleClick(event);
    });
  }
  handleClick(event) {
    const divs = document.getElementsByClassName('cheese');
    const clickedButton = event.target;
    console.log(clickedButton.textContent);
    
    Array.from(divs).forEach(elem => {
      const data = elem.getAttribute('data-index');
      if (data.includes(clickedButton.textContent)) {
        elem.style.display = 'block';
      } else {
        elem.style.display = 'none';
      }
    })
  }
  render() {
    tags.forEach((name) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'button-filter');
      button.textContent = name.trim();
      this.appendChild(button);
    })
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define('my-tags', MyTags);


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
        console.log(data[prop]);
        const myList = new createList(data[prop]);
        const divE = myList.createDivElement();
        divE.setAttribute(`class`, `cheese`);
        divE.setAttribute(`data-index`, `${data[prop].tags}`)
        main.appendChild(divE);
    };
});


