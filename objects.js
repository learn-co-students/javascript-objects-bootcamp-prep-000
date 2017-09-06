playlist = {
  'The Strokes' : 'Cool Song',
  'Weezer' : 'El Scorcho',
  'RHCP' : 'Californication'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  //delete playlist.artistName
  return playlist
}
