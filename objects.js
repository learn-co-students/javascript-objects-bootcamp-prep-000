var playlist = {
  "aaa":"Steven Universe", 
  "bbb":"Jeff Liu",
  "ccc":"Empire City"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}


function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
