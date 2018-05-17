const playlist = {
  Beyonce: 'Run the World',
  Adele: 'Set Fire to the Rain',
  'Michael Jackson': 'Beat it'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}