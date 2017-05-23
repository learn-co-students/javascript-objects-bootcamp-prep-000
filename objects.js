

var playlist = new Object({ taylorSwift: 'Seventeen' })

function updatePlaylist(obj, artist, song){
  obj[artist] = song
  return obj
}

function removeFromPlaylist(obj, artistName){
  delete obj[artistName]

  return obj
}
