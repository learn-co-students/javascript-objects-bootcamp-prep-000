var playlist = new Object();
function updatePlaylist(playlist, artist, title){
  return Object.assign({}, playlist, {[artist]: title} ); 
}
function removeFromPlaylist(obj, artist){
  delete obj.artist;
}