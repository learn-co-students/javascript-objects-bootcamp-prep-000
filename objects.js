var playlist = new Object({Zedd: 'Papercut'})

function updatePlaylist(list, artist, song) {
  var upList = new Object({});
  Object.assign(upList, list, {[artist]: song});
  return upList;
}

function removeFromPlaylist(list, artist) {
  delete list[artist]
  return list;
}
