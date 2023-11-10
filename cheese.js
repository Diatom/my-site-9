export class List {
    constructor(arr) {
        this.arr = arr;
        this.obj = this.buildCheese();
    }
    get cheese() {
        return this.obj;
    }
    buildCheese() {
        const keys = ['name', 'age', 'milk', 'since', 'type', 'mold', 'taste', 'description'];
        const obj = {};
        for (const prop in keys) {
            obj[keys[prop]] = this.arr[prop];
        }
        return obj;
    }
}


// class Filter {
//   constructor(tags) {
//     this.nav = document.createElement('nav');
//     this.tags = tags;
//   }
//   createButton() {
//     for (let key in this.tags) {
//       const button = document.createElement('button');
//       button.innerHTML = `${this.tags[key]}`;
//       button.setAttribute(`class`, `button-filter`);
//       button.addEventListener('click', this.onClickFilter);
//       this.nav.appendChild(button);
//     }
//     return this.nav;
//   }

//   onClickFilter(event) {
//     const divs = document.getElementsByClassName(`cheese`);
//     const clickedButton = event.target;
//     console.log(clickedButton.textContent);
//     for (let i in divs) {
//       let result = divs[i].textContent.includes(clickedButton.textContent);
//       if (result) {
//         divs[i].style.display = 'block';
//         } else {
//         divs[i].style.display = 'none';
//       }
//     }
//   }
// }

// const myFilter = new Filter(tags);
// const buttons = myFilter.createButton();
// document.body.appendChild(buttons);