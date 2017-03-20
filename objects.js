var playlist = {
  greenDay : "American Idiot",
  Shakira : "Hips Don't Lie"
};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye;
  return playlist;
}