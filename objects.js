var playlist = {"":""};

function updatePlaylist(list,artist,title){
  delete playlist[""];
  playlist[artist] = title;
  return playlist;
}

function removeFromPlaylist(list,artist){
  delete playlist["Phil Ochs"];
  list = artist;
  delete list.artist;
  return playlist;
}
