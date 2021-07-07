//objects defines an object called `playlist` containing at least one artist-song pair:
let playlist= { Pink: "Hello"};

//objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
function updatePlaylist (playlist, artistName, songTitle){
   playlist[artistName]= songTitle;
return playlist;
}
<<<<<<< HEAD

// objects removeFromPlaylist(playlist, artistName) removes `artistName` from `playlist`:
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
=======
>>>>>>> 2bad0eccf128a2a7b68a64998d09ae6174573853
