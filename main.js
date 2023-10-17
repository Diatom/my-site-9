import { listofcheese } from './cheese.js';

// class Templ {
//   constructor(che) {
//     this.che = che;
//     }
//   displayCheese() {
//     document.getElementById(`bodymain`).appendChild(this.che);
//   }
// }

function createList() {
  for (const property in listofcheese) {
      const obj = document.createElement(`div`);
      for (const property in listofcheese) {
       const item1 = document.createElement(`p`);
        item1.innerHTML = `${property}: ${listofcheese[property]}`;
        obj.appendChild(item1);
      }
      console.log(obj);
      return obj;
  }
}
document.getElementById(`bodymain`).appendChild(createList());


// const templ = new Templ(cheese);
// templ.displayCheese();