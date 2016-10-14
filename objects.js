var playlist = { 'artistName': 'title' }

function updatePlaylist(playlistObj, artistName, songTitle) {
  playlistObj[artistName] = songTitle
  return playlistObj
}

var removeFromPlaylist = function(playlistObj, artistName) {
  delete playlistObj[artistName];
  return playlistObj
}
