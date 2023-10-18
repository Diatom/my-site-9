function listofCheese(name, age, milk, since, type, mold, taste, description) {
    this.name = name,
    this.age = age,
    this.milk = milk,
    this.since = since,
    this.type = type,
    this.mold = mold,
    this.taste = taste,
    this.description = description
}

let cheese = ['Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese'];


const cheesePar = (che) => {
    che.forEach((par) => {
        return par;
    })
    return che;
}
   
function listofCheese() {
    const cheese = ['name', 'age', 'milk', 'since', 'type', 'mold', 'taste', 'description'];
    let obj = {};
  
    for (let i = 0; i < cheese.length; i++) {
      obj[cheese[i]] = arguments[i];
    }
  
    return obj;
  }
  
  let result = listofCheese('Cheddar', '3-24 months', 'Cow', '12th century AD', 'Semi-hard, hard', 'No', 'Round, spicy', 'Most popular semi-hard cheese');
  console.log(result);

export const listofcheese = {
    cheese: {
        name: 'Cheddar',
        age: '3-24 months',
        milk: 'Cow',
        since: '12th century AD',
        type: 'Semi-hard, hard',
        mold: 'No',
        taste: 'Round, spicy',
        description: 'Most popular semi-hard cheese'
    },
    cheese1: {
        name: 'Parmezan',
        age: '12-36 months',
        milk: 'Cow',
        since: '17th century AD',
        type: 'Hard',
        mold: 'No',
        taste: 'Spicy',
        description: 'Most popular hard cheese'
    }
}