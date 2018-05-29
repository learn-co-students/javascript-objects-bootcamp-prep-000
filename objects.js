var playlist = {
  Slowdive: 'Allison', 
  MyBloodyValentine: 'Sometimes'
  }

function updatePlatlist(playlist, a, b) {
  playlist[a] = b;
  return playlist
}

function removeFromPlaylist(playlist, a) {
  delete playlist[a];
  return playlist
}

