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
        divE.setAttribute(`class`, `cheese`)
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
      button.innerHTML = `${this.tags[key]}`;
      button.setAttribute(`class`, `button-filter`);
      button.addEventListener('click', this.onClickFilter.bind(this));
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