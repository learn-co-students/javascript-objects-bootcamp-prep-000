var playlist = {
  'The Fall': 'Oh Brother'
};

function updatePlaylist(playlist, artist, songTitle) {
  //Object.assign({}, playlist, {artist: songTitle});
  playlist[artist] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}