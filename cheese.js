// let array = ['Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese'];

export let array = [
    ['Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese'],
    ['Parmesan', '12-36 months', 'Cow', '13th century AD', 'Hard', 'No', 'Rich, nutty', 'Firm and granular cheese with a strong flavor'],
    ['Camembert', '3-8 weeks', 'Cow', 'Late 18th century', 'Soft', 'Yes', 'Creamy, earthy', 'Soft, creamy cheese with a bloomy rind'],
    ['Gruyère', '5-12 months', 'Cow', '12th century AD', 'Hard', 'No', 'Savory, slightly sweet', 'Firm and creamy Swiss cheese with a nutty flavor'],
    ['Gouda', '1-6 months', 'Cow', '12th century AD', 'Semi-hard', 'No', 'Buttery, mellow', 'Dutch cheese with a smooth and creamy texture'],
];
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
// let che = new List(array);
// export const listofcheese = che.cheese;



export function fetchData() {
  return new Promise((resolve, reject) => {
    let data = array;
      resolve(data);
      reject('Ошибка получения данных');
  });
}



// export const listofcheese = {
//     cheese: {
//         name: 'Cheddar',
//         age: '3-24 months',
//         milk: 'Cow',
//         since: '12th century AD',
//         type: 'Semi-hard, hard',
//         mold: 'No',
//         taste: 'Round, spicy',
//         description: 'Most popular semi-hard cheese'
//     },
//     cheese1: {
//         name: 'Parmezan',
//         age: '12-36 months',
//         milk: 'Cow',
//         since: '17th century AD',
//         type: 'Hard',
//         mold: 'No',
//         taste: 'Spicy',
//         description: 'Most popular hard cheese'
//     }
// }


// function listofCheese(name, age, milk, since, type, mold, taste, description) {
//     this.name = name,
//     this.age = age,
//     this.milk = milk,
//     this.since = since,
//     this.type = type,
//     this.mold = mold,
//     this.taste = taste,
//     this.description = description
// }

// let cheese = ['Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese'];
// let list = cheese.forEach((par) => par += `${par});


// const cheesePar = (che) => {
//     che.forEach((par) => {
//         return par;
//     })
//     return che;
// }
   
// function listofCheese() {
//     const cheese = ['name', 'age', 'milk', 'since', 'type', 'mold', 'taste', 'description'];
//     let obj = {};
  
//     for (let i = 0; i < cheese.length; i++) {
//       obj[cheese[i]] = arguments[i];
//     }
  
//     return obj;
//   }
  
//   let result = listofCheese('Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese');
//   console.log(result);


// const keys = ['name', 'age', 'milk', 'since', 'type', 'mold', 'taste', 'description'];
// const obj = {};

// for (const prop in keys) {
//     obj[keys[prop]] = array[prop];
// };
// console.log(obj);

// class List {
//     constructor(arr) {
//         this.arr = arr;
//     }
//     get cheese() {
//         return this.buildCheese();
//     }
//     buildCheese() {
//         const keys = ['name', 'age', 'milk', 'since', 'type', 'mold', 'taste', 'description'];
//         const obj = {};
//         for (const prop in keys) {
//             obj[keys[prop]] = this.arr[prop];
//         }
//         return obj;
//     }    
// }
// let cheddar = new List(array);
// console.log(cheddar.cheese);
// cheddar.cheese;