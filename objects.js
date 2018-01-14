var playlist = { "Frank Sinatra": "That's Life" }

function updatePlaylist(playlist, artistName, SongTitle) {
  playlist[artistName] = SongTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}

