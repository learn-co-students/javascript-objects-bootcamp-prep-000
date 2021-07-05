var playlist = new Object({ Adele: 'Hello' }, { JasonDerulo: 'Cheyenne' }, { Skillet: 'Monster'});

function updatePlaylist(playList, artistName, songTitle) {
  playList[artistName] = songTitle;
  return playList;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}