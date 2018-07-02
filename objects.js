var playlist = { 'Drake' :'Fake Love'}

function updatePlaylist(playlist, artistName, songTitle){
  //return Object.assign({}, playlist, { [artistName]:songTitle})
  playlist[artistName]=songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
