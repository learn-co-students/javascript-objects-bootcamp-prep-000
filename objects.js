var playlist = {artist: 'song'}

function updatePlaylist(list, artist, song) {
  list[artist] = song
}

function removeFromPlaylist(list, artist) {
  delete list[artist]
}