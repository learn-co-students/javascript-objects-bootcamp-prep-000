var playlist = {ligeti: "lontano"}

function updatePlaylist(playlist, artist_name, song){
  playlist[artist_name] = song;
  return playlist
}

function removeFromPlaylist(playlist, artist_name){
  delete playlist[artist_name];
  return playlist
}