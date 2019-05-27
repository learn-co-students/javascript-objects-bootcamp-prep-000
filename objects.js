var playlist = {
  'usher':'yea!', 
  'lil baby':'my dawg', 
  'lil wayne':'blunt blowin', 
  'riley green':'georgia time'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}