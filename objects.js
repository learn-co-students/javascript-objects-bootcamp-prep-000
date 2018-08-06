var playlist = {Sum41: "War"};

function updatePlaylist(plObject, artist,song){
  plObject[artist] = song;
  return plObject;
}

function removeFromPlaylist(plObject,artist){
  delete plObject[artist];
  return plObject;
}