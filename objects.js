var playlist = {name: 'hello'}

function updatePlaylist(obj, names, song) {
  obj[names] = song
  return obj
}

function removeFromPlaylist(obj2, artistName) {
  delete playlist.name
  return playlist
}
