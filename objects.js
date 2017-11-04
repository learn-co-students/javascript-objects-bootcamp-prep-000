var playlist = {"R Kelly":"Double Up"}
function updatePlaylist(playlist,artistName,songTitle){
    playlist[artistName] = songTitle;
    return playlist;
}
function removeFromPlaylist(p,a,s){
  delete p[a];
  return p;
}
