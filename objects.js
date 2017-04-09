var playlist = { artistName: 'Alicia Keys', songTitle: 'Girl On Fire'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
