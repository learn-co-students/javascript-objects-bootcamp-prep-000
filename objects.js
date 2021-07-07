var playlist = {
  "John Mayer": "Gravity",
  "Dave Matthews": "So Damn Lucky"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist 
}
