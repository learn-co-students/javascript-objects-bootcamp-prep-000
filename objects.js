var playlist = {JohnMayer: "In the Blood"};


function updatePlaylist(obj, artist, song){
  obj[artist]=song
  return obj
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
  return obj
}
