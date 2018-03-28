var playlist = {artistName: "song"}

function updatePlaylist(playlist, newArtistName, newSongTitle) {
  playlist[newArtistName] = newSongTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
