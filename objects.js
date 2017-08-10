var playlist = { jamesBlunt: 'beautiful'}

// wasn't working with dot notation.. fixed with squared bracket notation
function updatePlaylist(obj, artistName, songTitle){
 obj[artistName] = songTitle
 return obj
}
//wasn't working with the dot notation, able to fix with squared bracket notation
function removeFromPlaylist(obj, artistName){
  delete obj[artistName]
  return obj
}
