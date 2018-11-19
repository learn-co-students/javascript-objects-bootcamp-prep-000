var playlist = {
  'Jason Mraz':'Unlonely',
  'Whitney Houston':'I Will Always Love You'
};

function updatePlaylist(playlist,artist,song){
  return Object.assign(playlist, {[artist]:song})
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}