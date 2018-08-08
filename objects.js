var playlist = {Prince: 'Purple Rain'}


function updatePlaylist(listname, artist, song){
  listname[artist] = song
  return listname
}


function removeFromPlaylist(listname, artist){
  delete listname[artist]
  return listname
}
