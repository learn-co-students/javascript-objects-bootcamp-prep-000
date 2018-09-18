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

meals.snack = 'yogurt'

meals['snack']  // yogurt

console.log(meals)  // 'yogurt'

console.log(meals.breakfast)

console.log(meals['breakfast'])

