var playlist = {
  artist:'blue',
  song:'pond'
};

function updatePlaylist(playlistName, artistName, songTitle){
  playlistName[artistName] = songTitle;
  return playlistName;
}

//updatePlaylist(myPlaylist, 'red', 'awsome')
function removeFromPlaylist(playlistName, artistName){
  delete playlistName[artistName];
  return playlistName
}
