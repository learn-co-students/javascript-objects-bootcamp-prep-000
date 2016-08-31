var playlist = {"Kanye": "Gold Digger"};
function updatePlaylist(playlist, artistName, songTitle) {
  // it's important that we merge everything into
  // a new object
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
