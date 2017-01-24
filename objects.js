var playlist = new Object({Help: "Who"});

function updatePlaylist(playlistObject,artistName,songTitle) {
  playlistObject[artistName]=songTitle
  return playlistObject
}

function removeFromPlaylist(playlistObject,artistName) {
  delete playlistObject[artistName]
  return playlistObject
}
