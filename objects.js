var playlist = {'Phil Ochs':"Here's to the State of Mississippi"};
function updatePlaylist(object, key, value) {
 return Object.assign({},object, {[key]: value})
}
var playlist = {'Kanye': "Gold Digger"
};
function updatePlaylist(object, key, value) {
 return Object.assign({}, object, { [key]: value})
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
 return playlist
 
}

