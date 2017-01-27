var playlist = {
  Bieber: "Baby",
  Weezer: "Beverly Hills",
  AltJ: "Breezeblocks"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
