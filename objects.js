var playlist = {
  "Vance Joy" : "Riptide"
}

function updatePlaylist(obj, artist, songTitle){
  obj[artist] = songTitle
  return obj
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}


