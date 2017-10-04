/*initialize the object with a key-value pair — the keys will be artist names and the values will be song titles.*/
var playlist = {artistName: 'songTitle'};

/* 
1. Declare a function named updatePlaylist.
2. Function accepts three parameters: the playlist (an object), an artist name (string), and a song title (string). 
3. The body of the function should add the song and artist as a key-value pair to the playlist object. 
4. The function should return the whole playlist.
*/
function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist,{[artistName]: songTitle} )
}

/* 
1. Declare a function named removeFromPlaylist.
2. Function accepts accepts two arguments (the playlist object and the artist name).
3. The body of the function should delete the key-value pair from the playlist.
4. Return the updated playlist.
*/
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}


