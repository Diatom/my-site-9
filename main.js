import { List } from './cheese.js';
import { array, tags } from './data.js';


class createList {
  constructor(obj) {
    this.divE = document.createElement('div');
    this.obj = obj;
  }
  createDivElement() {
    for (let key in this.obj) {
      const pE = document.createElement('p');
      pE.innerText = `${key}: ${this.obj[key]}`;
      this.divE.appendChild(pE);
    }
    return this.divE;
  }
}


function fetchData() {
  return new Promise((resolve, reject) => {
    let data = array;
    resolve(data);
    reject('Ошибка получения данных');
  });
}

fetchData().then(data => {
    for (const prop in array) {
        let che = new List(array[prop]);
        console.log(che.cheese);
        const myList = new createList(che.cheese);
        const divE = myList.createDivElement();
        divE.setAttribute(`id`, [prop])
        document.body.appendChild(divE);
    };
})


class Filter {
  constructor(tags) {
    this.nav = document.createElement('nav');
    this.tags = tags;
  }
  createButton() {
    for (let key in this.tags) {
      const button = document.createElement('button');
      button.innerHTML = `#${this.tags[key]}`;
      button.setAttribute(`id`, [key])
      button.addEventListener('click', this.onClickFilter.bind(this));
      this.nav.appendChild(button);
    }
    return this.nav;
  }

  onClickFilter(event) {
    const divs = document.querySelectorAll('div');
    const clickedButton = event.target;
  
    divs.forEach(div => {
      if (div.textContent.includes(clickedButton.textContent)) {
        div.style.visibility = 'visible';
      } else {
        let divId = div.getAttribute('id');
        if (divId !== clickedButton.textContent.toLowerCase()) {
          div.style.visibility = 'hidden';
        }
      }
    });
  }
  }

const myFilter = new Filter(tags);
const buttons = myFilter.createButton();
document.body.appendChild(buttons);