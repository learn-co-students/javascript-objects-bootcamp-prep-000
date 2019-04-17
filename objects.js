var playlist = { Judee: "The Kiss"};

function updatePlaylist(list, artist, song){
  list[artist]=song;
  return list
}
function removeFromPlaylist(list, artist){
  delete list[artist];
  return list
}
