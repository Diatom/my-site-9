import { cheese } from './cheese.js';

const fet = await fetch (`/main.md`);
console.log(fet);

const body = await fet.text();
console.log(body);

class Templ {
  constructor(che) {
    this.che = che;
    }
  displayCheese() {
    document.getElementById(`bodymain`).appendChild(this.che);
  }
}

const templ = new Templ(cheese);
templ.displayCheese();