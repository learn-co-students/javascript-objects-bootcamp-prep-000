var playlist = {
  Seal: 'Loneliness',
  Rhiana: 'Brieth'
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},playlist,{[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
 return delete playlist.artistName;
}
