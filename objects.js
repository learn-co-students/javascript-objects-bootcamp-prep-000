var meals = { breakfast: "oatmeal" };
var meals = new Object( { breakfast: 'oatmeal' });
var playlist = new Object({ "Kacey Musgraves": "High Horse"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}