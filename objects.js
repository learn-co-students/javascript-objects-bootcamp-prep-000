// Define an object called playlist
var playlist = {artistName: "A song attributed to the artist"};

//

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

var meals = {};
