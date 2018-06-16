var playlist = 

{
  
  artist: 'song',
  
}


function updatePlaylist (playlist, artistName,songTitle)

{
  
  playlist[artistName] = songTitle;
  return playlist;
  
}

updatePlaylist (playlist,"Slowdive","song");
updatePlaylist (playlist,"My Bloody Valentine","song");
updatePlaylist (playlist,"Phil Ochs","song");




function removeFromPlaylist (playlist, artistName)


{
  
  delete playlist[artistName];
  return playlist;
  
}

removeFromPlaylist(playlist,'Slowdive')
console.log(playlist)