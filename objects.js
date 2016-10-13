var playlist = { 'artistName': 'title' }

function updatePlaylist(playlistObj, artistName, songTitle) {
  playlistObj[artistName] = songTitle
  return playlistObj
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  var remove = playlist.artistName( {}, playlist, { [artistName]: songTitle})
  delete
  return playlist
}
