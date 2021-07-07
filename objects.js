var playlist={};

playlist.best='lp';

function updatePlaylist(x,y,z){
  return x[y]=z;
}

function removeFromPlaylist(x,y){
  delete x[y];
}