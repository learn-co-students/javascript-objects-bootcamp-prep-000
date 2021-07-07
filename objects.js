var playlist = {};
playlist.kaleo = ['Way down we go'];
playlist.m83 = ['ElectroPunk'];

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist){
  delete playlist[artist];
  return playlist;
}