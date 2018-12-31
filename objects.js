var playlist = new Object({artistName: "songTitle"});

// One limitation this format puts on our playlist is you cannot add 2 songs that share the same key (artist).


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete ({'artistName':);
  return playlist;
}



/* Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist. */