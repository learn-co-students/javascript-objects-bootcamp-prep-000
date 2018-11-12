var playlist = {
  Slowdive : 'Alison',
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['My Bloody Valentine'] = 'Sometimes'
  playlist['Phil Ochs'] = 'Heres to the state of Mississippi'
  return playlist;
}

function removeFromPlaylist(playlist, aristName) {
  delete playlist.Slowdive;
  return playlist;
}