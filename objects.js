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
var meals = {
  breakfast: 'eggs',
  breakfast: 'bacon'
}
console.log(meals)