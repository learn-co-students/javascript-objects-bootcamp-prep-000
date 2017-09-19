var playlist = {
  'Kinks': 'You Really Got Me',
  'Nirvana': 'Come As You Are'
}

var updatePlaylist = function(playlist, artist, songTitle) {
  playlist[artist] = songTitle;
  return playlist;
}

var removeFromPlaylist = function(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
