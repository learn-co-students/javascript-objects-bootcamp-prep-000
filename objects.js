playlist={
  Coldplay:"Fix You",
  Greenday:"Boulevard of Broken Dreams"
}

function updatePlaylist(object,band,song){
  object[band]=song;
  return object
}

function removeFromPlaylist(object,band,song){
  delete object[band];
  return object
}