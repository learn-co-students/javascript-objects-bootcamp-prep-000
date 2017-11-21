var playlist = {KendrickLamar:'DNA'};
function updatePlaylist(obj,artist,song){
  return Object.assign({},{[artist] : song})  
}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist;
  return {}
}