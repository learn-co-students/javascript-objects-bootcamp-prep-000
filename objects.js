var playlist = {
  JustinBieber:"I'm sorry",
  BTS:"Fire",
  EXO:'Ko kobap '
  
}

function updatePlaylist(playlist, artistName, SongTitle){
   playlist[artistName] = SongTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}