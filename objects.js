var playlist = {'Paramore': 'Misery Business'};

function updatePlaylist (playlist, artist, title) {
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist;
}
