var playlist = {
  artistName: "title",
};

function updatePlaylist(playlist, artistName, title){
  playlist[artistName]=title;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}