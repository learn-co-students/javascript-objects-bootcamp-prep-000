var playlist = {Artist: "song name"}
function updatePlaylist(playlist, artist, songTitle){
  return Object.assign({}, playlist, {[artist]:songTitle})
}
function removeFromPlaylist(a, b){
  delete a[b];
  return a
}