var playlist = { artist1: 'song1'}

function updatePlaylist(obj, artist, song){
  Object.assign(obj,artist,song)
}

function removeFromPlaylist(obj, artist){
  delete obj.artist
  obj
}