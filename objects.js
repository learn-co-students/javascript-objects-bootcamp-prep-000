var playlist = {Stevie: "Signed, Sealed, Delivered",Gladys: "Midnight Train to Georgia"};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]; //here we're accessing the key-value pair: couldn't use dot notation to do it as in example, have to use bracket cos string
  return playlist
}
