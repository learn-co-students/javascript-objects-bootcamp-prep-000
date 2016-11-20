var playlist = { Prince: "Little Red Corvette",
                 Adele: "Rolling in the Deep",
                 Ramones: "Blitzkrieg Bop"
               };

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
