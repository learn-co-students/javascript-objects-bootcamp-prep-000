// // create
var playlist = {playlist: "rap"}
// var myplaylists = {}
//
// // creating
// const firstMeal = 'breakfast'
// var meals = { firstMeal: 'oatmeal' } // meals = { firstMeal: 'oatmeal' }
// var meals = { [firstMeal]: 'oatmeal' } // meals = { breakfast: 'oatmeal' }
//
// // accessing
// meals.firstMeal // oatmeal
// meals["breakfast"] //oatmeal
// meals[firstMeal] // oatmeal
//
// var meals = {
//   breakfast: 'oatmeal',
//   lunch: 'burrito',
//   dinner: 'steak'
// }
//
// // adding
// meals.brunch = "eggs"
// meals["snack"] = "turtle"
//
// // Deleting
// delete meals.brunch
//
// // editing
// meals.lunch = ["steak", "potatoes"]
//
// console.log(meals)

// defining a function
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
