var playlist = {Madonna: 'Like a Virgin', Prince: 'Little Red Corvette'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];

  return playlist;
}
