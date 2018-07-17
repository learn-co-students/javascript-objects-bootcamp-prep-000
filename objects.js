var playlist = { 'Kenny Rogers': 'Lucy' }

function updatePlaylist(playlist, name, title) {
  playlist[name] = title
  return playlist
}

function removePlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}