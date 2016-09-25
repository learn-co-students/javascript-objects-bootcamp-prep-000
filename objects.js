var playlist = new Object({name:'test'});
function updatePlaylist(obj, key, value) {
  // it's important that we merge everything into
  // a new object
  return Object.assign({}, obj, { [key]: value })
}
function removeFromPlaylist(playlist, artistName){
   delete playlist[artistName];
   return playlist;
}
