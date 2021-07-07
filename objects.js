var playlist = {artist: "song"}

function updatePlaylist(playlist, key, value) {
  playlist[`${key}`] = `${value}`
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[`${artistName}`]
  return playlist
}
