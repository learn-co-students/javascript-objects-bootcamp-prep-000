var playlist = {Metallica: 'One'};
function updatePlaylist(object,artistName,songTitle){
  playlist[artistName] = songTitle
}
function removeFromPlaylist(playlist, artistName){
 delete playlist[artistName]
  
}