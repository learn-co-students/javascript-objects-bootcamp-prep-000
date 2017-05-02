var playlist = {
  thefantastic5: "Summer Haze",
  carseatheadrest: "Killer Whales",
  weezer: "Why Bother?"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
