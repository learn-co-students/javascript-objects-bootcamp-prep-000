var playlist =  {MichaelJackson: "beat it"}

function updatePlaylist (playlist, artistname, songname){
  playlist[artistname] = songname
  return playlist
}

function removeFromPlaylist(playlist, artistname){
delete playlist[artistname]
}
