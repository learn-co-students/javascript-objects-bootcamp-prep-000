var playlist ={"The Beatles":"All you need is Love"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]= songTitle

  return playlist
};
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
