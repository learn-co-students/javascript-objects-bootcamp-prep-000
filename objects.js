var artist = 'Phil Ochs'
var playlist = {[artist]: 'song titles'} 
function updatePlaylist(playlist,artist,songtitle) {
  playlist.artist = 'My Bloody Valentine'
}
function removeFromPlaylist(playlist,artistName) {
 delete playlist[artistName]; 
 return playlist
}