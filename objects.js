var playlist = {
  artistNames: "songTitles",
};

function updatePlaylist(playlist, name, songTitles){
  
  
  playlist[name] = songTitles;
  
  return playlist;
  
}

function removeFromPlaylist(playlist, artistNames){
  delete playlist[artistNames];
  return playlist;
}