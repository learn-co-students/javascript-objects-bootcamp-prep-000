var playlist={Sia:'Audio',Eminiem:'Rap God',CharliPuth:'See you again'};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]= songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}