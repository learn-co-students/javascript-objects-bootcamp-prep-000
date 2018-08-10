var playlist = new Object({"bush": "glycerine"});

function updatePlaylist(playlist, artistName, songTitle){
  //return (Object.assign({}, playlist, {[artistName]: songTitle}))
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return console.log(playlist);
}
