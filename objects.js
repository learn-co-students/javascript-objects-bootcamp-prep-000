var playlist = {Seether : "Broken"}

function updatePlaylist (playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist){
  return delete playlist[artist];
}