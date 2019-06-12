var playlist = {Huxley: 'I Want You'};

//Limitation appears to be that Artist name cannot be two words separated??

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}