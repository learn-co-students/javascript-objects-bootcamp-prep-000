var playlist = {
  Bayside : 'Demons',
  Reol : 'Drop Pop Candy'
};
/*
function updatePlaylist(playlistName, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
*/
function updatePlaylist(playlistName, artistName, songTitle){
  return Object.assign(playlist, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}