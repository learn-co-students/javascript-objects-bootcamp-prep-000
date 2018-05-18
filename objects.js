// {} are an object
var meals = {};

// "breakfast" = the key; "oatmeal" = the value
var meals = {
  breakfast: "oatmeal"}; // All JS Objects are strings!
  
//Note: Keys need to be unique, values don't!

var playlist = { 
  slowDive: 'Alison',
  myBloodyValentine: 'Sometimes',
};

// add to playlist
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// remove from playlist
function removeFromPlaylist(playlist, artistName) {
  var updatedPlaylist = delete playlist[artistName];
  return updatedPlaylist;
}

