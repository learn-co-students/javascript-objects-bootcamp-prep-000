var playlist = { Artist : "Song" } ;

function updatePlaylist(playlist, artist, title) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi" ;
  return playlist
  
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Kanye;
  return playlist ;
}