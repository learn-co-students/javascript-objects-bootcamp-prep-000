function updatePlaylist(playlist, artistName, songTitle) {
  var playlistCopy = Object.assign({}, playlist);
  playlistCopy[artistName] = songTitle;
  return playlistCopy;
}

function removeFromPlaylist(playlist, artistName) {
  var playlistCopy = Object.assign({}, playlist);
  delete playlistCopy[artistName];
  return playlistCopy;
}

var playlist = {'Chubby Checker': 'The Twist'};
