var meals = {};
var meals = new Object();

var playlist = { savagegarden: "Truly Madly Deeply" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];   
  return playlist;
}