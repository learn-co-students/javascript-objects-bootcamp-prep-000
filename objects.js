//Literal syntax
var mealsL = { breakfast:"oatmeal" }

//Object Constructor
var mealsC = new Object({
  breakfast: 'oatmeal'
});


var playlist = new Object({
  Eminem: 'lose yourself',
  Tupac: 'ghetto gospel'
});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
