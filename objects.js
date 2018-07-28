var playlist = {
  artistName: songTitle
}
  
  function updatePlaylist(obj,key,value) {
    obj[key] = value
    return obj
  }
  
  function removeFromPlaylist(obj, artistName) {
    delete obj.artistName
    return obj
  }