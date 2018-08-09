//var meals = {}
//var meals = new Object();
// var meals = {breakfast: "oatmeal"}
var cereal = "Ohs"
var meals = new Object({breakfast:cereal})
console.log(meals['breakfast'])
meals.snack = "cheeze-its"
meals['lunch'] = "panini"
console.log(meals)

var sample = [1,2,4]
console.log(typeof sample)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj;
}

const recipe = {eggs:3}
console.log(recipe.eggs)

// destructivelyUpdateObjectWithKeyAndValue(recipe, 'eggs', '4')
// console.log(recipe)
//
// Object.assign({}, {thing: "item"})

function updateObjectWithKeyAndValue(obj, key, value) {
  improved =  Object.assign({}, obj, { [key]: value })
  return improved
}

updateObjectWithKeyAndValue(recipe, 'chocolate', "1cup")
console.log(improved.chocolate)
//
// delete recipe.eggs
// console.log(recipe)

var meals = {
  breakfast: "oatmeal", lunch: "turkey sandwich", dinner: "steak and po ta tos"
};

Object.assign({}, meals, {breakfast: ['oatmeal', 'banana']})

var artistName = "Dylan"
var songTitle = "Tangled Up in Blue"
// var playlist = new Object()
// var playlist = {}
var playlist = new Object({breakfast:cereal})
//console.log(playlist)


function updatePlaylist(playlist, artistName, songTitle) {
  // newPlaylist = Object.assign({}, playlist, {[artist]: songTitle})
  // return newPlaylist;
//  Object.assign({}, playlist, {[artistName]: songTitle})
  playlist[artistName] = "songTitle";
  return playlist
}

console.log(typeof playlist)
console.log(Object.keys(playlist).length)
updatePlaylist(playlist, "me", "I wrote a song")
updatePlaylist(playlist, "Liza", "Start Spreading the NEWS")
