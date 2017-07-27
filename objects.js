var playlist = {
  'Radiohead' : 'Creep',
  'The Strokes' : 'Someday',
  'Weezer' : 'Only in Dreams'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
