var playlist = new Object();

function updatePlaylist(obj, artist, song){
  obj[artist] = song;

return obj;
}

function removeFromPlaylist(obj, key){

  delete obj.key;
}
