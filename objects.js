var playlist = {
  artist: 'song titles'
}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song
  return obj;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist;
}
