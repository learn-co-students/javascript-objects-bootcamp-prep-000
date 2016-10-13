var playlist = {Big_Pun: "Capital Punishment", Elliott_Smith: "Almost Over"}

function updatePlaylist(playlist,artist,songTitle){ //adds artist:songTitle pair to playlist
  playlist[artist] = songTitle
  return playlist
}

function removeFromPlaylist(playlist,artist){
  delete playlist[artist] //Had to reference the object with brackets; delete playlist.artist doesn't work.
  return playlist
}
