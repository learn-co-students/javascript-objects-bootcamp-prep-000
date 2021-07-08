var playlist = {
  Britney: 'hit me baby one more time',
  ShaniaTwain: 'man I feel like a woman'
};


//The body of the function should add the song and artist as a
//key-value pair to the playlist object. The function should return the whole playlist.
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

//The body of the function should delete the key-value pair
// from the playlist and return the updated playlist.
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
