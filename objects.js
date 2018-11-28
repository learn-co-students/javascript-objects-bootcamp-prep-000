var playlist = {} ;
playlist.Beyonce = "4";
playlist["Michael Jackson"] = "Bad";

function updatePlaylist(playlist, artist, song) { 
  playlist[artist]= song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) { 
  delete playlist[artist];
  return playlist;
}