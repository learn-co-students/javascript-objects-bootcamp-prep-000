var playlist = {greenDay: "American Idiot",
 theMountainGoats: "Amy aka Spent Gladiator",
 theBeatles: "All You Needs is Love"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
