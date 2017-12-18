var playlist = {
  gambino: "Bonfire", 
  jayden: "B",
  kimi: "Dream Launterns",
titan: " Da Da DA Da"
  
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
        delete playlist[artistName];
        return playlist;
}