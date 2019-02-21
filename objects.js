
var playlist = {}

var playlist = {
  'kendrick': "humble",
  'sza': "weekend"
}

function updatePlaylist(obj, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}