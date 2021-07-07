var playlist = {artistName: 'song titles'};
function updatePlaylist (playlist, key, value){
  return Object.assign({}, playlist, {[key]:value})
}
function removeFromPlaylist (obj, key){
  delete playlist.artistName;
  return playlist;
}