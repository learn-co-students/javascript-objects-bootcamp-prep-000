var playlist  = {
Mayer: "Say",
CountingCrows: "Rain King",
DaveMatthews: "Crash"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
