var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle ){
  playlist['Phil Ochs'] = "My Bloody Valentine";
  playlist['Allison'] = "Slowdive"
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
  return playlist;
  
}