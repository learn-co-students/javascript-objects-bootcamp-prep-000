var playlist = {
  "Third Eye Blind": "Jumper"
}

var updatePlaylist = function(list, artist, song){
  list[artist] = song;
  return list;
}

var removeFromPlaylist = function(list, artist){
  delete list[artist];
  return list;
}
