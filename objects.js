var playlist = {
  
  MCR: "Teenagers",
  Britney_Spears: "Toxic",
  The_Killers: "When You Were Young"
};

function updatePlaylist(playlist, artistname, songtitle){
  return Object.assign( playlist, { [artistname]: songtitle});
}

function removeFromPlaylist(playlist, artistname){
  delete playlist[artistname]
  return playlist
}