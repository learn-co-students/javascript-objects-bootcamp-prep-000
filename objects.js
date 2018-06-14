var playlist = { 
  'Brandi Carlile': "pride and joy",
  'Pink': "I am here" 
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName] 
  return playlist
}