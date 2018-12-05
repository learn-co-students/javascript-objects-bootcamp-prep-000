var playlist = { artistname:"song"};

function updatePlaylist(playlist, artistname, song) {
  
     playlist[artistname]=song
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistname];
  
  
}
