var playlist = {
  artistnames: "song titles" };
  
  function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
  }
  
  function removeFromPlaylist(obj, artistnames) {
  delete playlist.artistnames 
  return playlist;
  }
  