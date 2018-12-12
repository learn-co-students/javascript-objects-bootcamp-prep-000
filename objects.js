var playlist= {djmango: "eurodancer"};

function updatePlaylist (object, artist, title){
  object [artist] ='title'
  return object;
}

function removeFromPlaylist( object, artist){
  delete object [artist];
  return object;
}



