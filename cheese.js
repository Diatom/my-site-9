function listofcheese(name, age, milk, since, type, mold, taste, description) {
    name: this.name,
    age: this.age,
    milk: this.milk,
    since: this.since,
    type: this.type,
    mold: this.mold,
    taste: this.taste,
    description: this.description
}


let cheese = ['Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese'];

console.log(Object.assign(listofcheese, cheese));


// const listofcheese = {name, age, milk, since, type, mold, taste, description};



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