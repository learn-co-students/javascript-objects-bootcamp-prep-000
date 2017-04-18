var playlist = new Object({test_artist: 'test_song'}); //why can't this be empty to pass test?

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}