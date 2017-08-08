
const firstMeal = 'breakfast'

var meals = { [firstMeal]: 'oatmeal' }

console.log(firstMeal)

console.log(meals.firstMeal) // is returning undefined

console.log();

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value
  console.log(obj)
  console.log()

  return obj

}

var recipe = { eggs: 3 } //changed from const to var to be able to reset it for testing of other functions

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

console.log(recipe)
console.log();

// ---------------------

Object.assign({}, {foo: 'bar'})
// { foo: 'bar' }

Object.assign({ eggs: 3 }, { flour: '1 cup' })
// { eggs: 3, flour: '1 cup' }

Object.assign({ eggs: 3 }, { chocolate: '1 cup', flour: '2 cups' }, { flour: '1/2 cups' })
// { eggs: 3, choclolate: '1 cup', flour: '1/2 cups' }


// ----------------------


function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value})

}

recipe = { eggs: 3 } //reset recipe to { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`

var newRecipe = updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

console.log(recipe)
// { eggs: 3 }
console.log()

console.log(newRecipe)
console.log()

// ----------------------

function updateObjectWithObject(targetObject, updateObject){

  return Object.assign({}, targetObject, updateObject)

}

var obj1 = {thing1: 'Susan'}, obj2 = {thing2: 'LucyLu'}

const updatedObject = updateObjectWithObject(obj1, obj2)

console.log(updatedObject)
