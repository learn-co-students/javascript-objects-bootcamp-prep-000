var playlist = new Object({
})

function updatePlaylist(obj, key, value){
  return playlist.push(obj, key, value)
}

function removeFromPlaylist(obj, key){
  delete obj.key;
  return playlist
}
