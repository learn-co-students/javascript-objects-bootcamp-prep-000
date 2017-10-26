
var meals = {};

var meals = new Object();

var meals = { breakfast: "oatmeal"};
var meals = new Object({breakfast: "oatmeal"});

var meals = {
  breakfast : 'avocado',
  lunch : 'spaghetti',
  dinner : 'hamburger'
}

meals.snack = 'yogurt';
meals['second breakfast'] = 'pancakes'

var sweetMeal = 'dessert'
meals[sweetMeal] = 'cake'

meals.breakfast = 'cereal'

//console.log(meals)

var playlist = { artistName : 'songTitle'};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
