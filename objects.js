var playlist = {
  blink182: "Miss You",
  Greenday: "Punk",
  Shinedown: "Western"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}