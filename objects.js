var playlist = {johnmayer: "Free fallin", poison: "Every rose has its thorn"}

function updatePlaylist(obj, artist, song){
  obj[artist] = song
}

function removeFromPlaylist(obj, artist){
  delete obj[artist]
}
