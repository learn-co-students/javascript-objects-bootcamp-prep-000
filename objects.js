var playlist = {
  "Sara Bareilles": "Brave",
  "Bastille": "Laura Palmer",
  "Foster the People": "Helena Beat",
  "Marina & the Diamonds": "Blue",
  "Kanye": "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
