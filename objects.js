var playlist = {bono: "song"};

function updatePlaylist(obj, artist, song){
  Object.assign(obj, {[artist]: song})
return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj[artist];
  return obj;
}
