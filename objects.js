var playlist = {
  justin: 'beiber',
  ayla: 'akkad'
}

function updatePlaylist(obj, artistName, songTitle) {
  obj[artistName] = songTitle
  return obj
}
updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi")

function removeFromPlaylist() {
  delete playlist.ayla
  delete playlist.justin
  delete playlist['Phil Ochs']
  return playlist
}
