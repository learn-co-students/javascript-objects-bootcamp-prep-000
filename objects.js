//defines an object called 'playlist'
var playlist = {artistName: 'songTitle'};

//adds 'artistName: songTitle' key-value pair to 'playlist'
function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}

//removes value 'artistName' from 'playlist'
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
