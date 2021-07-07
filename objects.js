var playlist = {Rihanna: 'Work'};

var updatePlaylist = function(playlist, artistName, songTitle){
  // add a song and artist as a key-value pair. return whole playlist
  playlist[artistName] = songTitle;
  return playlist
}

var removeFromPlaylist = function(playlist, artistName){
  // delete the key-value pair from the playlist return updated list
  delete playlist[artistName];
  return playlist
}
