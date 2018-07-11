var playlist = {
  gaga: "Bad Romance"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}