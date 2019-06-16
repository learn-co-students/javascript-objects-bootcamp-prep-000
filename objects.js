let playlist = {'taylor swift' : 'delicate'};

function updatePlaylist(playObj, artist, song){
  Object.assign(playObj, {artist: song});
  return playObj;
}

function removeFromPlaylist(playObj, artist){
  delete playObj[artist];
  return playObj;
}