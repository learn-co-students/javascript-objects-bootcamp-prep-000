/*
var meals = {breakfast: "eggs, bacon, steak, ham, sausage"};

var meals = new Object({breakfast: "oatmeal, milk, cereal, bacon"});

var meals = {breakfast: "avacado", lunch: "burrito", dinner: "steak"};

meals.snack = "yogurt"
meals.breakfast = "cereal"
//meals["second breakfast"] = "bagel"

const firstMeal = "oatmeal";

var meals = {[firstMeal]: "oatmeal"};

var meals = {breakfast: "oatmeal"};
var meals = {lunch: "milk"};
var meals = {dinner: "yogurt"};
var meals = {dessert: "burrito2"};

console.log(meals.breakfast);
console.log(meals["breakfast"]);
console.log([firstMeal])
//console.log(meals["snack"]);
console.log(meals.lunch);
//console.log(meals.snack);
//console.log(meals.dessert)

var sweetMeal = "dessert";

meals[sweetMeal] = "cake";

console.log(meals.dessert) 
console.log(meals[sweetMeal])

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value
  return obj
}

const recipe2 = {eggs: 3}

 console.log(destructivelyUpdateObjectWithKeyAndValue(recipe2, "flour", "3 cups"));

Object.assign({}, {foo: "bar"})

Object.assign({eggs: 3}, {flour: "1 cup"})

Object.assign({eggs: 3}, {chocolate: "1 cup", flour: "2 cups, 1/2 cups"})

function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign ({}, obj, {[key]: value})
}

const recipe = { eggs: 3 }
const recipe3 = {eggs: 3}
 
console.log(updateObjectWithKeyAndValue(recipe3, 'flour', '2 cups', 'flour', '1/2 cup'))

function updateObjectWithObject (targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject) 
}

var meals2 = { breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and potatoes"};

//delete meals2.dinner;
//console.log(meals2);
meals2.breakfast = ["oatmeal", "banana"];
console.log(meals2)

Object.assign({}, meals2, {breakfast: ["oatmeal", "banana"]})

console.log(meals2);
*/

var playlist = {artistName: "Drake", artistSong: "In My Feelings"} 

function updatePlaylist(playlist, artistName, artistSong) {
  playlist[artistName] = artistSong
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}







