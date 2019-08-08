var playlist = {ThinLizzy: 'The Boys Are Back In Town'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}