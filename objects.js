var playlist = {
  "Foxy Shazam": "Oh Lord",
  "Jukebox the Ghost": "Undeniable You",
  "Francis and the Lights": "Like a Dream"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=`${songTitle}`;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
