var playlist = {
  Usher: 'Yeah!',
  /*
  ['Bruno Mars']: 'Treasure',
  ['Michael Jackson']: 'Billy Jean'*/
}

function updatePlaylist (playlist, artist, title){
  playlist[artist] = title
  return playlist
}

function removeFromPlaylist (playlist, artist){
  delete playlist[artist]
  return playlist
}