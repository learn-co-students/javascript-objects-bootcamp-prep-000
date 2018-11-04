var playlist = new Object({artist: 'song title'});
function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
} 