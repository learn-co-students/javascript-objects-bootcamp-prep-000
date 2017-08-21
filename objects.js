var meals = new Object(); {

}
var meals  = {breakfast: "oatmeal"};

var meals = new Object ({breakfast: "oatmeal"})

var meals =  {
  breakfast: 'eggs',
  breakfast: 'bacon'
meals.breakfast
}
var meals = {
  breakfast: 'avocado',
  lunch: 'avocado',
  dinner: 'avocado'
  meals ['breakfast']
}
var meals = {
 breakfast: "oatmeal",
 lunch: "turkey sandwich",
 dinner: "steak and potatoes"
}
meals.snack = 'yogurt';  //yogurt
meals ['snack']  //yogurt
meals.lunch // burrito

meals['second breakfast'] = 'bagel'

var sweetMeal = 'dessert'

meals[sweetMeal] = 'cake';

meals.dessert // 'cake'
meals[sweetMeal] // 'cake'

meals.breakfast = 'cereal'


///actual lab
var playlist =  {
  key: value
};

function updatePlaylist(playlist, key, value) {
  return Object.assign({},playlist, {[key]: value})
}

function removeFromPlaylist(playlist, key, value) {
  playlist.key = ['value']
  playlist;
}
