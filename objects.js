var playlist = { LinkinPark: 'Numb'}

function updatePlaylist(playlst, artistName, song){
  playlst[artistName] = song
  return playlst
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}