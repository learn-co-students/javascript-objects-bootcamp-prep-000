var playlist = {ArtistName: "songTitle"};

 //Object.assign()

function updatePlaylist (list, name, song){
  //list[name] = song;
  Object.assign(list, {[name]: song});
  return list;
}

function removeFromPlaylist(list, name){
  delete list[name];
  return list;
}