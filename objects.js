var playlist = {
  rando: 'lalala'
};

function updatePlaylist(lst, artist, song) {
  lst[artist] = song;
  return lst
}

function removeFromPlaylist(lst, artist) {
  delete lst[artist];
  return lst;
}
