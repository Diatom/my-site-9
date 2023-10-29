// import { listofcheese } from './cheese.js';
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

// const myList = new createList(listofcheese);
// const divE = myList.createDivElement();
// console.log(divE);

// document.body.appendChild(divE);

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
      button.innerHTML = `#${tags[key]}`;
      this.nav.appendChild(button);
    }
    return this.nav;
  }
}

const myFilter = new Filter(tags);
const buttons = myFilter.createButton();
document.body.appendChild(buttons);


function onClickFilter() {
  const button = document.querySelector('button');
  let value = this.button.textContent;
  button.addEventListener('click', (event) => {
    if (Object.values().includes(value))
  }
}


class Filter {
  constructor(tags) {
    this.nav = document.createElement('nav');
    this.tags = tags;
  }
  createButton() {
    for (let key in this.tags) {
      const button = document.createElement('button');
      button.innerHTML = #${this.tags[key]};
      button.addEventListener('click', this.onClickFilter.bind(this)); // Добавляем обработчик события по клику
      this.nav.appendChild(button);
    }
    return this.nav;
  }

  // Обновленный метод onClickFilter
  onClickFilter(event) {
    const buttons = document.querySelectorAll('button');
    const clickedButton = event.target;
    const value = clickedButton.textContent.slice(1); // Удаляем символ # из текста кнопки
    const filteredArray = array.filter(item => item.includes(value));
    
    if (filteredArray.length > 0) {
      buttons.forEach(button => {
        const buttonValue = button.textContent.slice(1);
        if (filteredArray.some(item => item.includes(buttonValue))) {
          button.style.display = 'flex'; // Отображаем кнопку, если соответствующий текст присутствует в отфильтрованном массиве
        } else {
          button.style.display = 'none'; // Скрываем кнопку, если соответствующий текст не присутствует в отфильтрованном массиве
        }
      });
    } else {
      buttons.forEach(button => button.style.display = 'flex'); // Показываем все кнопки, если отфильтрованный массив пустой
    }
  }
}

const myFilter = new Filter(tags);
const buttons = myFilter.createButton();
document.body.appendChild(buttons);



// for (const property in listofcheese) {
//   if (listofcheese.hasOwnProperty(property)) {
//     const obj = document.createElement(`div`);
//     obj.innerHTML = JSON.stringify(property);

//     for (const prop in listofcheese[property]) {
//       if (listofcheese[property].hasOwnProperty(prop)) {
//         const item = document.createElement(`p`);
//         item.innerHTML = prop + ": " + listofcheese[property][prop];
//         obj.appendChild(item);
//       }
//     }
  
//   document.body.appendChild(obj);
//   }
// }


// function createList() {
//   for (const property in listofcheese) {
//     const cheese = document.createElement(`div`);
//     if (listofcheese.hasOwnProperty(property)) {
//       for (const prop in listofcheese[property]) {
//         if (listofcheese[property].hasOwnProperty(prop)) {
//           const item = document.createElement(`p`);
//           item.innerHTML = prop + `: ` + listofcheese[property][prop];
//           cheese.appendChild(item);
//         }
//       }
//       return cheese;
//     }
//   }
// }
// document.body.appendChild(createList());