var playlist = {
  Mastodon: "Blood and Thunder"
}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}