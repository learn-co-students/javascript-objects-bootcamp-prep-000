var playlist = {
  "Grateful Dead": "Ramble on Rose",
  "Jimi Hendrix": "Purple Haze",
  "They Might Be Giants": "Doctor Worm"
};


function updatePlaylist(playlist, artistName, songTitle){
   playlist[[artistName]] = songTitle;
   return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[[artistName]];
  return playlist;
}
