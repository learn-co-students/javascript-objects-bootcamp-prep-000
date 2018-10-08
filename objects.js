var playlist = {
  'Paper Tongues': 'Ride To California'
}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song
  return obj
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist]
  return obj
}