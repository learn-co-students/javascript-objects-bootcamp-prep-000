var playlist = {
  hendrix: "foxy lady"
};


function updatePlaylist(obj, key, value) {
  obj[key] = value
 
 return obj
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName]
}
