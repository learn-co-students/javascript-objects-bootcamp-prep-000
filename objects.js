var playlist = new Object ({artistName : 'songTitle'})
//what limitation does this impose on playlist?

function updatePlaylist(playlist, newArtistName, newSongTitle){
  playlist[newArtistName] = newSongTitle;
  return playlist;//Object.assign ({}, playlist, {[artistName]:songTitle})
  //return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
