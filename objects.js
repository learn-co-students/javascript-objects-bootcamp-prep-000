var playlist = {
  'My Bloody Valentine':'song a',
  'Slowdive':'song b',
  'Phil Ochs':'song c',
}
function updatePlaylist(playlist,artistname,title){
 playlist.artistname=title;
 return playlist;
}
function removeFromPlaylist(playlist,artistname){
  delete playlist[artistname]
  return playlist
}