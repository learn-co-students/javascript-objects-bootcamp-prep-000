var playlist = {
  BoB: 'Bombs Away',
  Eminem: 'Rap God',
  Kanye: 'Gold Digger'
}

function updatePlaylist(obj, key, value) {
  playlist.'Phil Ochs' = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist(obj, key) {
  delete playlist.Kanye
  return playlist
}
