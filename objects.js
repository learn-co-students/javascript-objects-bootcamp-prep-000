var playlist = new Object({
  'New Order': 'Ceremony',
  'Echo & the Bunnymen': 'A Promise'
})

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName]=songTitle;
 return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}