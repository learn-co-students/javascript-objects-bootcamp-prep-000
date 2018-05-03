var meals = {};

var meals = new Object();

var meals = {breakfast: "oatmeal"};

var meals = new Object({breakfast: "oatmeal"})


var meals = {
  breakfast: "eggs",
  breakfast: "bacon"
}


var meals = {
  breakfast: "avocado",
  lunch: "avocado",
  dinner: "avocado"
}

const firstMeal = 'breakfast'
var meals = {[firstMeal]: 'oatmeal'}

console.log(meals.breakfast)

console.log(meals['breakfast'])

console.log(meals[firstMeal])

console.log(meals.firstMeal)

/// adding to an object

var meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak'
}

meals.snack = 'yogurt'

console.log(meals.snack)
console.log(meals['snack'])
console.log(meals.lunch)

meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert'

meals[sweetMeal] = 'cake';

console.log(meals.dessert)
console.log(meals[sweetMeal])

meals.breakfast = 'cereal'

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  
  return obj
}

const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

Object.assign({}, {foo: 'bar'})

Object.assign({ eggs : 3 }, { flour : '1 cup'})

Object.assign({ eggs : 3 }, { chocolate : '1 cup', flour : '2 cups'}, {flour: '1/2 cup'})

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] : value })
}

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

var meals = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};



console.log(Object.assign({}, meals, {breakfast: ['oatmeal', 'banana']}))


console.log(meals)
