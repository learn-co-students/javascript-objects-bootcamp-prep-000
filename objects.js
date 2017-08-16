
var playlist = {}
playlist.artist = []
playlist.song = []


function updatePlaylist(playlist, artist, song ){
  Object.assign(playlist, {[artist]: song})
  return playlist
}


function removeFromPlaylist(object, artistName){
 delete playlist[artistName]
  return playlist
}
