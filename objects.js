var playlist = {'dirty projectors':'up in hudson', 'rick astley':'never gonna give you up', prince:'purple rain'}
var object = playlist
var artistName = 'Beyonce'
var songTitle = 'Halo'

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName] : songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
