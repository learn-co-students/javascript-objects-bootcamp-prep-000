var playlist = new Object( {
  RKelly: 'I Believe I can fly'
});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist;
};

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
};
