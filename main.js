import { listofcheese } from './cheese.js';

for (const property in listofcheese) {
  if (listofcheese.hasOwnProperty(property)) {
  const obj = document.createElement(`div`);
  
  for (const prop in listofcheese[property]) {
    if (listofcheese[property].hasOwnProperty(prop)) {
      const item = document.createElement(`p`);
      item.innerHTML = prop + ": " + listofcheese[property][prop];
      obj.appendChild(item);
    }
  }
  
  document.body.appendChild(obj);
  }
}


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