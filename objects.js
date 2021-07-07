var playlist = new Object({AliciaKeys : 'Fallin'});

function updatePlaylist(obj, keyArtistName, valueSongTitle){
  return obj[keyArtistName] = valueSongTitle;
  
}

function removeFromPlaylist(obj, keyArtistName){
  return delete obj[keyArtistName];
}