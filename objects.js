var playlist = new Object({artistName: "songTitle"});

// One limitation this format puts on our playlist is you cannot add 2 songs that share the same key (artist).


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}