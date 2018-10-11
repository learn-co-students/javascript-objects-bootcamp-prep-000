// limitation will be that if we delete an artist
// all their songs will be deleted

var playlist = {Maluma: 'Mala mia'}

function updatePlaylist(newObj, artist, song){
  newObj[artist] = song
  return newObj
}

function removeFromPlaylist(newObj, artist){
  delete newObj[artist]
  return newObj
}
