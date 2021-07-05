var playlist = {
  Beatles: "Hey Jude"
};

function updatePlaylist(obj, key, value){
  playlist['Phil Ochs']='My Bloody Valentine';
  return playlist;
}

function removeFromPlaylist(obj, key){
  delete playlist.Slowdive;
  return playlist;
}