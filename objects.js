var playlist = {"Daft Punk": "Robot Rock"}

function updatePlaylist(object, key, value){
  object[key] = value;
  return object;
}

function removeFromPlaylist(object, key){
  delete object[key];
}