var playlist = {
  artist: "Bill Evans"
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye;
  return playlist;
}