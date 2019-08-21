var playlist = { Britney: "lucky", Gaga: "Poker Face"};

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
