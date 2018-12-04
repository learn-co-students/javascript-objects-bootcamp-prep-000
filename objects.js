var playlist = {
  artistName: 'songtitle'
}

function updatePlaylist(playlist, artistName, songtitle) {
  playlist[artistName] = songtitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}
