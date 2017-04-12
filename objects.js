var playlist = {name1: "title1"};

function updatePlaylist(some_object, artistName, songTitle){
  some_object[artistName] = songTitle;
  return some_object;
}

function removeFromPlaylist(some_object, artistName){
  delete some_object[artistName];
  return some_object;
}
