var playlist = new Object({ Artist: 'Song' })

function updatePlaylist(playlist, Artist, Song) {
  playlist[Artist] = Song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}