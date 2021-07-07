var playlist = {
  'SOPHIE': 'Immaterial',
  'Kanye West': 'Send It Up',
  'Carly Rae Jepsen': 'I Didn\'t Just Come Here to Dance'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}