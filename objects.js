var playlist = new Object;
playlist = {
  U2: "Lemon",
  Aerosmith: "Crazy",
  Pink: "Try",
  BrunoMars: "Uptown funk"
 }

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
