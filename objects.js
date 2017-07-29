var playlist = {chacal:"quiereme"};

function updatePlaylist(o, artist, song){
  return Object.assign({}, o, {[artist]:song});
}

function removeFromPlaylist(o, artist){
  var result = Object.assign({}, o);
  delete result[artist];
  return result;
}
