var playlist = {robZombie: 'Superbeast'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

/*4. Create a function `removeFromPlaylist` which accepts two arguments (the playlist object and the artist name). The
body of the function should delete the key-value pair from the playlist and return the updated playlist.*/

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  console.log(playlist)
  return playlist;
}