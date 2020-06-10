var playlist = { 
  "Phil Ochs": "Here's to the State of Mississippi"
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist['My Bloody Valentine'] = 'Sometimes'
  playlist['Slowdive'] = 'Alison'
  return playlist
}

function removeFromPlaylist(playlist, artistName){
    delete playlist.Slowdive
    return playlist
}
