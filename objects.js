//objects defines an object called `playlist` containing at least one artist-song pair:
let playlist= { Pink: "Hello"};

//objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
function updatePlaylist (playlist, artistName, songTitle){
   playlist[artistName]= songTitle;
return playlist;
}

// objects removeFromPlaylist(playlist, artistName) removes `artistName` from `playlist`:
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
