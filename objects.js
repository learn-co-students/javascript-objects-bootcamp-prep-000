var playlist = {
   'Elliott Smith': 'Stupidity Tries',
   'Modest Mouse': 'Bankrupt on Selling'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist [artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist [artistName];

  return playlist;
}
