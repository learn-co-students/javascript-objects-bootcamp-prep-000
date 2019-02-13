var playlist = {
  "My Bloody Valentine": 'Sometimes'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Slowdive"
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
}