var playlist = {michael_jackson : 'beat it' }

function updatePlaylist(object, artist, song){
  
  Object.assign( object, {[artist]:song});
  console.log(object)
  return object;
  
}

function removeFromPlaylist(object, artist){
  
  delete object[artist];
  return object;
  
  
}