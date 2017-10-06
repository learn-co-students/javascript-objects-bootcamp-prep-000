var playlist = {
  Eminem: "Not afraid",
  SlaughterHouse: "Hammerdance",
  Shady: "Hello",
  Classic: "Hoto"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
