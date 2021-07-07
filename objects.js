var playlist = {
  Slowdive: 'Allison', 
  MyBloodyValentine: 'Sometimes'
  }

function updatePlaylist(playlist, a, b) {
  playlist[a] = b;
  return playlist
}

function removeFromPlaylist(playlist, a) {
  delete playlist[a];
  return playlist
}

