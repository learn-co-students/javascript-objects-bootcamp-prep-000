const playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya",
  "shreya": "barso re"
};

function updatePlaylist(playlist, artistName, songTitle){
  //console.log(playlist);
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}