  
function updatePlaylist(plist, artist, song) {
  plist[artist] = song
  return plist
}
function removeFromPlaylist(playlist, artistName) {
  
  delete playlist[artistName]
  return playlist
}

var playlist = new Object();
playlist['Kanye'] = 'Harder, Better'