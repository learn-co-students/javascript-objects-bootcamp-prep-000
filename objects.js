var playlist = {vampireweekend: "horchata", haim: "days are gone", lizzo: "juice"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}