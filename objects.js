var playlist = { artistname: 'songTitle'};


function updatePlaylist(playlist, artistname, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
  return playlist;
}

function removeFromPlaylist(playlist, artistname){
  delete playlist.Kanye;
  return playlist;
}
