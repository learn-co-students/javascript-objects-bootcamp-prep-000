var playlist = new Object({artistName: 'songTitles'});

function updatePlaylist(playlist, key, value){
  playlist[key] = value
  return playlist
}

function removeFromPlaylist(playlist, key){
  //delete playlist.key;
  delete playlist[key];
  return playlist
}
