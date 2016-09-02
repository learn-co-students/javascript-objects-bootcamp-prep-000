var playlist = {avrahamFried: "meine tfillin", mbd: "moshiach"};

function updatePlaylist(obj,k,v){
  obj[k] = v;
  return obj;
}

function removeFromPlaylist(obj, k){
  delete obj[k];
  return obj;
}
