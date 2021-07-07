var playlist = {'Johann Sebastian Bach': 'Wedding Cantata'};

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
