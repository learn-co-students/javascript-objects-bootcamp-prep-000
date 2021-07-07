const playlist = {aristname1: "song title1", aristname2: "song title2"};

function updatePlaylist (playlist, aristname, songname){
  playlist[aristname] = songname;
  return playlist;
}

function removeFromPlaylist (playlist, aristName){
  delete playlist[aristName];
  return playlist;
}