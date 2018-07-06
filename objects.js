var playlist = {
  'Foo Fighters' : 'Everlong',
  'Prince' : 'Purple Rain',
};

function updatePlayList (list, artist, title) {
  list[artist] = title;
  return list;
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
    return list;
}