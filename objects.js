var playlist = new Object();
function updatePlaylist(object,artist,song){
  object[artist] = song;
}
function removeFromPlaylist(object,artist){
  delete object[artist];
}