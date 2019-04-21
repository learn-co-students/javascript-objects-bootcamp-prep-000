var playlist = {'Slowdive':'','My Bloody Valentine':'','Phil Ochs':''}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
}
