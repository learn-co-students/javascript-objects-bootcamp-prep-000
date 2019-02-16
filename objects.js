var playlist = new Object({ 'Slowdive': 'Alison'});
// console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  // console.log(playlist);
  delete playlist[artistName];
  // console.log(playlist);
}

removeFromPlaylist(playlist, 'Alison');
console.log(playlist);