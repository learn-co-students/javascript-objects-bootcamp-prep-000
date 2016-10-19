var playlist = new Object({breakfast: 'oatmeal'});

function updatePlaylist (object, name, title){
  object[name]=title
  return object
}

function removeFromPlaylist (object, name){
  delete object[name]
  return object
}
