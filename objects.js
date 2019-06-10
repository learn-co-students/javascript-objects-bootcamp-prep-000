var playlist = {tool:"laterlaus"};

function updatePlaylist(playlist, artistName, songTitle){

  return Object.assign(playlist, {[artistName]:songTitle})
}

updatePlaylist(playlist, "My Bloody Valentine", "Sometimes");

function removeFromPlaylist(playlist, artistName){

  delete playlist.artistName

}

removeFromPlaylist(playlist, tool);
