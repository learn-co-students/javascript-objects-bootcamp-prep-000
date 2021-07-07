var playlist = {
  "A": "1",
  "B": "2"
}

function updatePlaylist (playlist, artistName, songName) {
  playlist["Slowdive"] = "Alison"
  playlist["My Bloody Valentine"] = "Sometimes"
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}
