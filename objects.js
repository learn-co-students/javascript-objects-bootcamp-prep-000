var playlist = {
  CardiB:'Bodack Yellow'
}

function updatePlaylist(pl,artist,song){
  pl[artist]=song
  return pl
}

function removeFromPlaylist(pl,artist){
  delete pl[artist]
  return pl
}