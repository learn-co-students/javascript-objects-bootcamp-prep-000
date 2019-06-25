//creating objects

var meals = {breakfast: "oatmeal"};

var meals = new Object({breakfast: "oatmeal"});

//all keys in JavaScript objects are strings!

const firstMeal = "breakfast";
var meals = {firstMeal: 'oatmeal'};
console.log(firstMeal, meals);
//the meals object's key would be 'firstMeal', not 'breakfast'.

var meals = { [firstMeal]: 'oatmeal' };
//meals would be { breakfast: 'oatmeal' }

//access the values in an object using dot notation
console.log(meals.breakfast); //returns 'oatmeal'

//or square-bracket notation
console.log(meals['breakfast']); //returns 'oatmeal'
console.log(meals[firstMeal]); //returns 'oatmeal'
console.log(meals.firstMeal); //returns undefined

//firstMeal = variable while breakfast = key

//initialize an object with some key-value pairs
var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

//can add new key-value pairs to objects.
//we assign the value 'yogurt' to the key 'snack' in the object.
meals.snack = 'yogurt';

meals.snack // 'yogurt'
meals['snack'] // 'yogurt'
meals.lunch // 'burrito'

//can also add key-value pairs using bracket notation:
meals['second breakfast'] = 'bagel'

//can also use variables as keys this way:
var sweetMeal = 'dessert'
meals[sweetMeal] = 'cake';
meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

//can update existing key-value pairs by using the key:
meals.breakfast = 'cereal'

//DESTRUCTIVE METHODS (above and below)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
//returns { eggs: 3, flour: '3 cups' }

recipe // returns { eggs: 3, flour: '3 cups' }

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------

//create a new object that stores both the old and the new properties

//create a new object and pass it properties from existing objects

//if two objects share a key, the right-most object's value for that key will win)

Object.assign({}, { foo: 'bar' })
// returns { foo: 'bar' }

Object.assign({ eggs: 3 }, { flour: '1 cup' })
// { eggs: 3, flour: '1 cup' }

Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' })
// { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }

//rewrite the above update function in a non-destructive way:

function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}

// it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
    
//const recipe = { eggs: 3 };

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
//returns `{ eggs: 3, chocolate: '1 cup' }
recipe //returns { eggs: 3 }

//---also --------------------------------//

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------
//DELETING A KEY-VALUE PAIR

var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };

// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise

delete meals.dinner; // returns true

meals;
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }

//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------
//CHANGING A VALUE

var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

meals.breakfast = ["oatmeal", "banana"];

meals;
// returns {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

//------ non-destructively:
Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })
// returns {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

meals;
// still {
//   breakfast: "oatmeal",
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
// };