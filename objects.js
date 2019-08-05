var playlist = { "Jay": 'Jay Song', "Bill": "bill Song" }
playlist.songTitle = "My Song"

function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
   return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
