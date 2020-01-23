var playlist = {artistName: "songTitle"}

function updatePlaylist(obj, artistName, songTitle){
 Object.assign(obj, {[artistName]:[songTitle]} )
return obj
}
function removeFromPlaylist(obj, artistName){
  delete obj[artistName]
  return obj
}