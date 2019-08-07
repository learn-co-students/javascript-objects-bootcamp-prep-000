var playlist = {
  Slowdive: "song1",
  "My Bloody Valentine": "song2",
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, "Phil Ochs", "song4")

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive

  return playlist
}
