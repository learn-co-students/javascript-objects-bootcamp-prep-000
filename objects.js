var playlist = new Object({'sting': 'shape of my heart'})

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
