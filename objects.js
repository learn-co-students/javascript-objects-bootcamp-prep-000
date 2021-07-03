var playlist = {
  arianaGrande: "seven", shawnMendez: "you", JustinBieber: "yummy"
}

var updatePlaylist = function(obj, artist, song){
obj[artist] = song
return obj


// Object.assign({}, obj, {[artist]: song})
// return playlist
 
}

var removeFromPlaylist = function(obj, artist){
  delete obj[artist]
  return playlist
}

console.log(updatePlaylist(playlist, "tyler", "breakFree"))
console.log(removeFromPlaylist(playlist,"shawnMendez"))