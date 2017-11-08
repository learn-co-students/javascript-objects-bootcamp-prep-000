var playlist = { name: "title"};

function updatePlaylist(playlist, artistName, songTitle)  {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  var playlist = Object.assign({artistName: "Kanye"})
delete playlist.artistName
  return playlist;
}
