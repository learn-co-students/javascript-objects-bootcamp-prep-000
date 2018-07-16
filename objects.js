var playlist = { 
  radiohead: "Videotape",
  theBeatles: "A Hard Day's Night"
}

function updatePlaylist (obj, artist, title) {
  obj[artist] = title
  return obj
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}