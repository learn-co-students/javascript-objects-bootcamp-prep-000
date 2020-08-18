var meals = {breakfast: "oatmeal"};
var meals = new Object({breakfast: "oatmeal"});

var playlist = {
  artistName: 'song',
}

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName];
}
