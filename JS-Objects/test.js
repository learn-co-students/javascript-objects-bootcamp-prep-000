var meals = {};
var meals = new Object();

var meals  = {breakfast: "oatmeal"};

// or, equivalently

var meals = new Object({ breakfast: 'oatmeal'})

// We can initialize the following object

var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}

console.log(meals)

var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
}

console.log(meals)

var firstMeal = 'breakfast'

var meals = {
  firstMeal: 'oatmeal'
}

console.log(meals)
// the meals object would be 'firstMeal', not 'breakfast'

var meals = {
  [firstMeal]: 'oatmeal'
}

console.log(meals)

console.log(meals.breakfast) // 'oatmeal'

console.log(meals['breakfast']) // 'oatmeal'

console.log(meals.firstMeal)

var meals = {
 breakfast: 'oatmeal',
 lunch: 'burrito',
 dinner: 'steak'
}

// Add key-value pairs using the (.) notation

meals.snack = 'yogurt'

console.log(meals.snack) // 'yogurt'

console.log(meals['snack']) // 'yogurt'

console.log(meals.lunch)  // 'burrito'

// Add key-value pairs using the []  notation

meals['second breakfast'] = 'bagel'

console.log(meals)

console.log()

var sweetMeal = 'dessert'

meals[sweetMeal] = 'cake'

console.log(meals.dessert) // 'cake'

console.log(meals[sweetMeal]) // 'cake'

// function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
//   obj[key] = value
  
//   return obj
// }

// const recipe = {eggs: 3}

// destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

// // returns {eggs: 3, flour: '3 cups' }

// // but also:

// console.log(recipe)  // {eggs: 3, flour: '3 cups'

// Object.assign({}, {foo: 'bar'})
// // {foo: 'bar'}

// Object.assign({eggs: 3}, {flour: '1 cup'})
// // {eggs: 3, flour: '1 cup'

// Object.assign({eggs: 3}, {chocolate: '1 cup', flour: '2 cups'}, {flour: '1/2 cup'})
// // {eggs: 3, chocolate: '1 cup', flour: '1/2 cup'}

// It's important we merge everything into
// a new object such as the empty {}
// Otherwise, the object obj will be modified.
// Test what happens if this line was written as:
// return Object.assign(obj, { [key]: value })

function updateObjectWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value })
  }

const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

// return `{ eggs: 3, chocolate: '1 cup}'

console.log(recipe)

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

var meals = { breakfast: "oatmeal", 
              lunch: "turkey sandwich", 
              dinner: "steak and potatoes" };

// the `delete` operator returns `true` if it
// has successfully
// deleted, `false` otherwise

delete meals.dinner; // true

console.log(meals)
// returns { breakfast: "oatmeal", lunch: "turkey sandwich"}

var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
}

meals.breakfast = ["oatmeal", "banana"]

console.log(meals)

var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
}

var newMeals = Object.assign( {}, meals, {breakfast: ['oatmeal', 'banana'] })
// returns {
  // breakfast: ["oatmeal", "banana"],
  // lunch: "turkey sandwich"
  // dinner: "steak and potatoes"
  // }
  
  console.log(newMeals)
  
  console.log(meals)
  // still {
  // breakfast: "oatmeal",
  // lunch: "turkey sandwich",
  // dinner: "steak and potatoes"
  // };
