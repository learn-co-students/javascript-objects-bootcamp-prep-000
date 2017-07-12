var artistName
var songTitle
var playlist = {[artistName]:songTitle}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[`${artistName}`] = songTitle
  console.log(playlist[`${artistName}`])
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[`${artistName}`]
  console.log(playlist[`${artistName}`])
  return playlist
}
