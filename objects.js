var playlist = {Artist1: 'Song1'}

function updatePlaylist(playlistName,artistName,songName) {
 return  Object.assign({}, playlistName,{[artistName]: songName})
}

function removeFromPlaylist(playlistName,artistName) {
  delete playlistName[artistName]
  return playlistName
}
