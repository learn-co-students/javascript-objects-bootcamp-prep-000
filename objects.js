var playlist = {
  IU:'Good Day',
  GD:'Who You',
  CeeLoGr:'Fuck You'
  
};

console.log(playlist)

function updatePlaylist(obj, key, value) {
  var updObj= obj[key] = value
  return updObj
}

updatePlaylist(playlist,'neyo','So Sick')
console.log(playlist)

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}

removeFromPlaylist(playlist, GD)
console.log(playlist)

delete playlist.IU
console.log(playlist)

