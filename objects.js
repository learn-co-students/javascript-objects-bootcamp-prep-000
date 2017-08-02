var playlist = new Object({ artistName: 'songTitle'});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.Kanye;
  return playlist;
}
