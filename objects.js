var playlist = {}

playlist['Young the Giant'] = "Islands"

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
