var playlist = {
  artistName: 'Usher',
  songTitle: 'You got it'
}
var updatePlaylist = function(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

updatePlaylist(playlist, artistName, songTitle)
removeFromPlaylist (playlist, artistName);
