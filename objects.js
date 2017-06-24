var playlist = {artist: "song title"}

function updatePlaylist(playlistToUpdate, artistName, songTitle) {
  playlistToUpdate[artistName] = songTitle
  return playlistToUpdate
}

function removeFromPlaylist(playlistToUpdate, artistName) {
  delete playlistToUpdate[artistName]
  return playlistToUpdate
}