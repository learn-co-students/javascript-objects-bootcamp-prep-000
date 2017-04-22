var playlist = {"The Beatles":"Dear Prudence"};

function updatePlaylist(obj, artist, song){
  return Object.assign({}, obj, { [artist]: song })
}

function removeFromPlaylist(obj, artist){
  var newobj = Object.assign({}, obj);
  delete newobj[artist];
  return newobj;
}
