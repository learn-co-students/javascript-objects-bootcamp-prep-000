var playlist = new Object ({Eagles: 'Alright', Doors: 'Brown Eye Girl'});
function updatePlaylist(playlist, artistName, songTitle){
  //adds the `artistName: songTitle` key-value pair to `playlist`
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  //removes `artistName` from `playlist`
  delete playlist[artistName]; // true
  return playlist;
}
