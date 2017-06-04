var playlist = {artistName: "songTitle"}

function updatePlaylist(list, artistName, songTitle){
  list[artistName] = songTitle;

  return list;
}

function removeFromPlaylist(list,artistName){
  delete list[artistName];

  return list;
}
