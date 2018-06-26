var meals = {};
var meals = new Object();
var meals = { breakfast: "oatmeal"};
var meals = new Object({breakgast: "oatmeal"});
const firstMeal = "breakfast";
var meals = {firstMeal: "oatmeal"};
//objects key would be "firstmeal", not "breakgast"
var meals = {[firstMeal]: "oatmeal"}
//objects key would be "breakfast"
//dot notation
meals.breakfast // "oatmeal"
meals["breakfast"] //"oatmeal"
meals[firstMeal] //"oatmeal"
meals.firstMeal //undefined
var meals = {
  breakfast: "oatmeal",
  lunch: "burrito",
  dinner: "steak"
}
meals.snack = "yogurt";
meals.snack //"yogurt"
meals["snack"]//"yogurt"
meals.lunch //"burrito"
meals["second breakfast"] = "bagel"
var sweetMeal = "dessert"
meals[sweetMeal] = "cake";
meals.dessert // "cake"
meals[sweetMeal] // "cake"
meals.breakfast = "cereal";
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
const recipe = {eggs: 3}
destructivelyUpdateObjectWithKeyAndValue(recipe, "flour", "3 cups")
//returns {eggs: 3, flour: "3 cups"}
//but also:
recipe // {eggs: 3, flour: "3 cups"}
Object.assign({}, { foo: "bar"}) // { foo: "bar"}
Object.assign({ eggs: 3}, {flour: "1 cup"})// { eggs: 3, flour: "1 cup"}
Object.assign({ eggs: 3}, {chocolate: "1 cup", flour: "2 cups"}, {flour: "1/2 cup"}) // { eggs: 3, chocolate: "1 cup", flour: "1/2 cup"}
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
// it´s important that we merge everything into a new object such as the empty{} otherwise, the object obj will be modified. Test what happens if this line was written as: return Object.assign(obj, { [key]: value })

updateObjectWithKeyAndValue(recipe, "chocolate", "1 cup") // returns { eggs: 3, chocolate: "1 cup"}
recipe // { eggs: 3 }

var playlist = {music: "rock"}
function updatePlaylist(playlist, artist, song){
  return Object.assig(playlist, {[artist]: song})
}
