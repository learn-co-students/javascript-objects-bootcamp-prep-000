var playlist = {
  'Linkin Park': 'In the End',
  Evanesence: 'My Immortal'
}
function updatePlaylist (playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}
function removeFromPlaylist (playlist, artist){
  delete playlist[artist];
  return playlist;
}