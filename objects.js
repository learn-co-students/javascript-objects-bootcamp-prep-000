var playlist = {
  metallica: 'FadeToBlack'
};

function updatePlaylist (playlist, artistName, songTitle){
  var playlist = { [artistName]:songTitle }
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  
  delete playlist [artistName]
  return playlist
}