var playlist = {artist: "song"}

function updatePlaylist(playlistName, artistName, songName) {
  return playlistName[artistName] = songName
}

function removeFromPlaylist(playlistName, artistName) {
  delete playlistName[artistName]
  return playlistName
}