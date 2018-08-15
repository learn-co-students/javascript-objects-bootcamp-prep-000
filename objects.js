var playlist = {'Phil Ochs':"Here's to the State of Mississippi"};
function updatePlaylist(object, artistName, songTitle) { 
 return Object.assign({}, playlist, {'artist':'songTitle'});
}
function removeFromPlaylist(object,artistName) {
  delete playlist.Slowdive;
  return playlist;
}