var playlist = {
  cher: 'song1',
  segar: 'song2'
};



function updatePlaylist(playlkist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}