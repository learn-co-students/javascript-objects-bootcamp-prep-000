var playlist = {disturbed: 'Stupify'}

function updatePlaylist(object, artist, song){
  object[artist]=song
  return object
}

function removeFromPlaylist(object, artist){
  delete object[artist]
}
