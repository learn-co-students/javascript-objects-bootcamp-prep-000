var playlist = {
  FleetFoxes: 'Mykonos',
  Bob: 'London Bridge' ,
  Yeasayer: 'Sunrise'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}