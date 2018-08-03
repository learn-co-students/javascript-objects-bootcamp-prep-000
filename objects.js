var playlist = { artist:"track" };

function updatePlaylist(playlist, artist, track){
  playlist[artist] = track;
  return playlist;
} 

function removeFromPlaylist(playlist, artist){
 delete playlist[artist];
  return playlist
}