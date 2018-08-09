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



