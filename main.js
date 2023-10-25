// import { listofcheese } from './cheese.js';
import { List } from './cheese.js';
import { array } from './data.js';


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