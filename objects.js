var playlist = { Prince: 'Purple Rain'}

function updatePlaylist(playlist, artistName, songtitle){
  Object.assign(playlist, {[artistName]: songtitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
