var playlist = new Object();
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'
console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
updatePlaylist(playlist, "beatles", "Norwegian Wood");

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}