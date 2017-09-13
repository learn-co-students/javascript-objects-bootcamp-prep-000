var playlist = new Object();
playlist = {GreenDay: "Basket Case"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  var property = artistName
  delete playlist[property]
  return playlist
}
