var playlist = {
  'marvin gaye': `what's going on`,
}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist]
  return obj
}
