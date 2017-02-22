var playlist = { artistName='Linkin Park', songTitle='In The End'}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist.artistName = artistName
  playlist.songTitle = songTitle
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName
}