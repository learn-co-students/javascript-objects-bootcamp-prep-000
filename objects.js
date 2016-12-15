var playlist = {
  blackKeys : "white stripes",
  jami : "morning glory",
  rk : "people like you"
}

function updatePlaylist(playlist, artist, title){
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}
