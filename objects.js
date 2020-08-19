var playlist = {
  songTitle : ["Fat Lip", "In Too Deep", "Still Waiting"]
}
function updatePlaylist( playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
