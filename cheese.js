const array = ['Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese'];

class List {
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
let che = new List(array);
export const listofcheese = che.cheese;




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