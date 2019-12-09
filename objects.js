var playlist = {
  'Mariah Carey' : "All I Want for Christmas Is You",
  'Wham!' : "Last Christmas",
  'Bobby Helms': "Jingle Bell Rock"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  //var newPlaylist = Object.assign({}, playlist, {[artistName]: songTitle})
  //return newPlaylist
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
