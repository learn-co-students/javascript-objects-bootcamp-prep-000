var playlist ={ artist: "megadeath", song: "1320"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}
 function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
 }