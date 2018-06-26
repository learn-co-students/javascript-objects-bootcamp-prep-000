var playlist = { artistName: 'songTitle'}

function updatePlaylist(obj, artistName, songTitle){
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(obj, artistName){
  delete playlist[artistName];
  
  return playlist;
}
