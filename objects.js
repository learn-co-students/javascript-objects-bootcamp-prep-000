var playlist = Object.assign({}, playlist ,{ georgeMichael: 'Freedom' });

function updatePlaylist( playlistObj, artist, song ){
  playlistObj[artist] = song;
  return playlistObj;
};

function removeFromPlaylist(playlistObj, artist){
  delete playlistObj[artist];
  return playlistObj;
};
