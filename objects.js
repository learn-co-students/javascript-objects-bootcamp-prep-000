var playlist = {
  manchesterOrchestra: 'the gold',
  houses: 'fast talk',
  jackWhite: 'seven nation army'
}

function updatePlaylist(list,artist,song) {
  list[artist] = song;
}

function removeFromPlaylist(list,artist) {
  delete list[artist];
}