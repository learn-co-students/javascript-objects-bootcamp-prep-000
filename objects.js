var playlist = { 'artistName': 'title' }

function updatePlaylist(playlistObj, artistName, songTitle) {
  playlistObj[artistName] = songTitle
  return playlistObj
}

function removeFromPlaylist(playlistObj, artistName, songTitle) {
  var remove = playlist.artistName( {}, playlistObj, { [artistName]: songTitle})
  delete
  return playlistObj
}
