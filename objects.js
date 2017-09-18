var playlist = {
queen: "Killer Queen",
coral: "In my Room",
fooFighters: "All my Life"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
