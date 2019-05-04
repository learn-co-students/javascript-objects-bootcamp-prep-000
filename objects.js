let playlist = {'The Blanks': 'Superman'};
function updatePlaylist (playlistObj, artist, title){
  playlistObj[artist] = title;
  return playlistObj;
}


function removeFromPlaylist (playlistObj, artist){
  delete playlistObj[artist];
  return playlistObj;
}