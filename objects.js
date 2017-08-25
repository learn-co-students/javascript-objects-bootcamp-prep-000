var playlist = {
  Kanye: "Golddigger",
  Kartell: "Morning"
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
