var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist,artistNames,songTitles){
  playlist[artistNames]=songTitles;
  return playlist
}
function removeFromPlaylist(playlist,artistNames){
  delete playlist[artistNames];
  return playlist
}
