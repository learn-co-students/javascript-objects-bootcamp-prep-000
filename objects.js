var playlist = {marty : "the humes"}

function updatePlaylist(obj, artist, song_title) {
  obj[artist] = song_title
  return obj
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist]
  return obj
}
