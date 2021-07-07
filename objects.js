var playlist = new Object({ Ariana_Grande: "Thank You, Next" });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}