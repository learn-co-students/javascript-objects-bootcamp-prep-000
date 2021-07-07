var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
 return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}

// app won't submit. Adding a comment to see if that triggers something.