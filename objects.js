var playlist = { lofang : "88"}
function updatePlaylist(play, artist, song) {
  play[artist] = song;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  playlist;
}