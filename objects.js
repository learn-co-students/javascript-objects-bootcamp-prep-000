var playlist = new Object()
playlist['Green Day'] = 'American Idiot'

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {[artist]: song})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
