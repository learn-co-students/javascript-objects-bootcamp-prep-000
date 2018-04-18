var playlist = {
  artist: 'song'
}
function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}
function removeFromPlaylist(p,a){
  return delete p[a]
}
