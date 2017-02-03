var playlist = {'Elvis': "Rock On!"}

var updatePlaylist = (playlist, artistName, songTitle) => {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

var removeFromPlaylist = (playlist, artistName) => {
  var newplaylist = Object.assign({}, playlist)
  delete newplaylist[artistName]
  return newplaylist
}