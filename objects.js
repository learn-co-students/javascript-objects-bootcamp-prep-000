var playlist = { artist: 'song titles'};

function updatePlaylist (playlist, artist, title){
  return Object.assign({}, playlist, {[artist]: title})
}

function removeFromPlaylist (playlist, artist){
  var playlist = { artist: 'song titles'};
  delete playlist.artist;
  return playlist;

}
