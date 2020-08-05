var playlist = {
  'Lindsey Stirling': 'Artiemis',
  'Within Tempatation': 'All I Need',
  'BTS': 'Love Yourself'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
