var playlist = {
  "Reggie Watts": "I Just Want To",
  "Lonely Island": "Spring Break",
  "Sisqo": "Thong Song"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];

  return playlist
}
