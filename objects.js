var playlist = {
   celine : "suffisait"
}


function updatePlaylist (playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Slowdive"
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}