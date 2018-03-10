//objects defines an object called `playlist`:
var playlist =
  {
    artistName:"Madonna",
    songTitle:"like a virgin",
  }

//objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName] = songTitle;

   return playlist
}

//objects removeFromPlaylist(playlist, artistName) removes `artistName` from `playlist`:
function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];

    return playlist
}
