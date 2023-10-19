import { listofcheese } from './cheese.js';

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

const myList = new createList(listofcheese);
const divE = myList.createDivElement();
console.log(divE);

document.body.appendChild(divE);



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