var playlist = new Object({artist: 'mysong'})

function updatePlaylist(pl, newArtist, newSong){
  pl[newArtist]=newSong
  return pl
}

function removeFromPlaylist(pl, name){
  delete pl[name]
  return pl
}
