var playlist = {artistname: "song"}
function updatePlaylist( playlist, artistname, songTitle){
  playlist[artistname]=songTitle
}
function removeFromPlaylist(playlist, artistname){
delete playlist[artistname]
}
