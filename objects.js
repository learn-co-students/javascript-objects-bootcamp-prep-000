var playlist = { Blur : 'On My Way To The Club' };

function updatePlaylist(object, artist, song){
  object[artist] = song;
  return object;
}

function removeFromPlaylist(object, artist){
  delete object[artist];
}