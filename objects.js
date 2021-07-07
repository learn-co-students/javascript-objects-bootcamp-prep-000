var playlist = {
  'REM': 'Orange Crush'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  // delete playlist.artistName didn't work...why?
  delete playlist[artistName];
  return playlist;
}