var playlist = new Object({artist: 'song1'});

function updatePlaylist(playlist1, artist1, song1){
  playlist[artist1] = song1;
  return playlist;
}

function removeFromPlaylist(playlist1, artist1){
  delete playlist[artist1]
  return playlist;
}