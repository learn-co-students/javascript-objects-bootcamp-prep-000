playlist = new Object({})
playlist.liga="c"
function updatePlaylist(obj,name,song){
  obj[name]=song
  return obj
}
function removeFromPlaylist(obj,name){
 delete obj[name]
 return obj
}
