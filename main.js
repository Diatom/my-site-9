import { cheese } from './cheese.js';

// class Templ {
//   constructor(che) {
//     this.che = che;
//     }
//   displayCheese() {
//     document.getElementById(`bodymain`).appendChild(this.che);
//   }
// }
console.log(cheese);


const obj = document.createElement(`div`);
for (const property in cheese) {
  const item = document.createElement(`p`);
  item.innerHTML = `${property}: ${cheese[property]}`;
  obj.innerHTML = item;
}

document.getElementById(`bodymain`).appendChild(obj);


// const templ = new Templ(cheese);
// templ.displayCheese();