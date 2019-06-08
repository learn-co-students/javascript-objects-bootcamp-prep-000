const playlist = {
  slowdive: 'Alison',
  myBloodyValentine: 'Sometimes'
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist;
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist['Slowdive'];
  playlist;
}
console.log(playlist);
