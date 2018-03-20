var meals = {};

var meals = new Object();

var meals = {breakfast: "oatmeal"};

var playlist = {loggins: "Heart to Heart"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
