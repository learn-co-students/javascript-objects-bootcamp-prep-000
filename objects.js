var playlist = {
  'artist': 'song'
}

function newPlaylist(playlist, artist, song) {
  playlist['artist'] = 'song'
  return playlist
  }
function updatePlaylist(playlist, artist, song) {
  playlist['Phil Ochs'] = 'song'
  return playlist
}
function removeFromPlaylist(playlist, artist, song) {
  delete playlist.Slowdive;
  return playlist
}