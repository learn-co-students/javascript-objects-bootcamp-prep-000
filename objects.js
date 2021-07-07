var playlist = {
  metallica: 'enter sandman'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}


console.log(playlist)
function removeFromPlaylist(playlist, artistName){
  playlist.artistName = "song"
  delete playlist[artistName] 
}