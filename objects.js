var playlist = {
  johnDoe: 'songTitle'
};

function updatePlaylist(list, name, title) {
  list[name] = title;
  return list;
}

function removeFromPlaylist(playList, artistName) {
  delete playList[artistName];
  return playList;
}
