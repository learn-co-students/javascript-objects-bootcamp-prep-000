var playlist = {'Dolly Parton':'Islands in the Stream'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}