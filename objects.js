var playlist = {name:"title"};


function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  var myNewVariable = playlist
  delete myNewVariable[artistName];
  return playlist;
}