var playlist = { 
  "Phil Ochs": 'song',
  "Slowdive": 'song2'
};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: [songTitle] });
  playlist;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}