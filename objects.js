var playlist = { "Modest Mouse": "Night on the sun", "Porches": "Country", "Rae Sremmurd": "Yoga"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
