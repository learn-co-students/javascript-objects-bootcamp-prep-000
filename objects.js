var meals = {};

var meals = new Object();

var meals = { breakfast: "oatmeal"};
var meals = new Object({breakfast: 'oatmeal'});


var meals = {
  breakfast: "Eggs",
  lunch: "sandwich",
  dinner: 'steak'
};

meals.breakfast;
meals['breakfast'];


var meals = {
  breakfast: "oatmeal",
  lunch: "turkey sandwich",
  dinner: "steak and potatoes"
};

Object.assign({}, meals, {breakfast:['oatmeal', 'banana'] });

var playlist = {artistName: "song"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}