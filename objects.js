var playlist = { 'Artist1': 'Song1'}

var updatePlaylist = function(playlst, artist, song) {
  playlst[artist] = song
  return playlst
}

var removeFromPlaylist = function(playlst, artist) {
  delete playlst[artist]
}