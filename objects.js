var playlist = {
  artistName: "songTitle"
}

function updatePlaylist(obj, key, value) {
  obj[key] = value
 
  return obj
}
function removeFromPlaylist(obj,name){
 delete obj[name]
 return obj
  // delete obj['name']
  // return obj
}