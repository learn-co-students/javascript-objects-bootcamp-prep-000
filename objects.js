var playlist = { kanye: "Gold Digger" };

function updatePlaylist(playlist, artist, songTitle){
  playlist[artist] = songTitle;
  return playlist;
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");


function removeFromPlaylist(playlist, artistName){
 delete playlist.artistName;
   playlist = {};
   
   return playlist;
}

removeFromPlaylist(playlist, kanye);