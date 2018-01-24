var playlist = {artist_name:"song_title"}

function updatePlaylist(playlist, artist, song_title) {
  Object.assign(playlist, {[artist]: song_title})
  return playlist
  
  
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
  
}