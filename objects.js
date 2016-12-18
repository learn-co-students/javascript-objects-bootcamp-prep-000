var playlist = {LessThanJake: 'Hello Rockview'}

function updatePlaylist(pL, artist, song){
  pL[artist] = song
  return pL
}

function removeFromPlaylist(pL, artist){
  delete pL[artist]
  return pL
}
