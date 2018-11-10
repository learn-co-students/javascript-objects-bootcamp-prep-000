var playlist = {"The Beatles": "Lucy in the Sky with Diamonds", "Hanson": "MmmBop"};

function updatePlaylist (obj, artist, hit){
  obj[artist] = hit;
  return obj;
}

function removeFromPlaylist (obj, artist){
  delete obj[artist];
  return obj;
}
