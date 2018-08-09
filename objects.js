// My objects.JS

// 1st object
var meals = {};

// 2nd object
var meals = new newMeal();

// 3rd object
var meals = { breakfast: "oatmeal" };
// or
var meals = new newMeal({ breakfast: 'oatmeal' })

// duplicate keys are caught as a Warning by the editor!
/*
var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}
console.log(meals) // NO DISPLAY
 */
 
// duplicate values are OK
var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}
 
// object key words
const firstMeal = 'breakfast'
var meals = { firstMeal: 'oatmeal' }
console.log(meals) // NO DISPLAY
 
// variable as object key
meals = { [firstMeal]: 'oatmeal' }
meals.breakfast // 'oatmeal'
// or
meals['breakfast'] // 'oatmeal'
// or
meals[firstMeal] // 'oatmeal'
// but
meals.firstMeal //undefined

// adding to an object
meals.snack = 'yogurt';
meals.snack // 'yogurt'
meals['snack'] // 'yogurt'
meals.lunch // 'burrito'
meals['second breakfast'] = 'bagel'

// 
var sweetMeal = 'dessert'
 
meals[sweetMeal] = 'cake';
 
meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

// 
meals.breakfast = 'cereal'

// 
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}
const recipe = { eggs: 3 }
 
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')
// returns { eggs: 3, flour: '3 cups' }
 
// but also:
 
recipe // { eggs: 3, flour: '3 cups' }
//
Object.assign({}, { foo: 'bar' })
// { foo: 'bar' }
 
Object.assign({ eggs: 3 }, { flour: '1 cup' })
// { eggs: 3, flour: '1 cup' }

Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cup' })
// { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }

// rewrite in a non-destructive way
function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
     // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })

const recipe = { eggs: 3 } // already declared above
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`
 
recipe // { eggs: 3 }

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

// Deleting a Key-Value Pair
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes" };
 
// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner; // true

meals;
// returns { breakfast: "oatmeal", lunch: "turkey sandwich" }

// Changing a Value
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
meals.breakfast = ["oatmeal", "banana"];

meals;
// {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

// non-destructively
var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};
 
 
Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })
// returns {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }
 
 
meals
// still {
//   breakfast: "oatmeal",
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
// };

/*
Instructions
Open objects.js

Assign an object to the variable playlist and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our playlist?)

Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.

Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.
 */
 