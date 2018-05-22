var playlist = {FooFighters : "Walk", Drake : "Nice for What", TheDarkness : "I Believe in a Thing Called Love"};

function updatePlaylist(playlist, artist, song){
  
  return Object.assign({}, playlist, {[artist]: song})
  
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}

