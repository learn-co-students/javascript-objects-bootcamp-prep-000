var playlist = {"Phil Ochs": "Slowdive"};
function updatePlaylist (playlist,artist,song){
 playlist.artist = "My Bloody Valentine"
 return playlist
}
function removeFromPlaylist (playlist,artistName){
  delete playlist.Slowdive
  return playlist
}