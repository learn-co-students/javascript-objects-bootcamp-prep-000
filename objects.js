var playlist = {
  ludacris: 'move',
  rocky: 'goldie'
}

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, { artist: song });
}

function removeFromPlaylist(playlist, artist){
 delete playlist.artist;
 playlist;
}