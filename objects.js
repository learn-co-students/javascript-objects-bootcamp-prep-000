var playlist = {
  artistName: 'songTitle'
};

//The body of the function should add the song and artist as a
//key-value pair to the playlist object. The function should return the whole playlist.
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;

  //obj[key] = value

}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
