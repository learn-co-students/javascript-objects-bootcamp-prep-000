const firstMeal = 'breakfast'

var meals = {
  [firstMeal]: 'oatmeal',
  lunch: 'eggs',
  dinner: 'cheetos'
};
var vegetables = {
  fav: 'broccoli',
  gross: 'peas'
}
meals['second breakfast'] = 'bagel'

console.log(meals['second breakfast'])


function updateObjectWithObject(targetObject, updatesObject) {
  console.log(Object.assign({}, targetObject, updatesObject))
}

delete vegetables.fav;
console.log(vegetables)
