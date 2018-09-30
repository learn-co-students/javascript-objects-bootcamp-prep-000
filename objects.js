var playlist = {'David Bowie': 'Cat People'};

function updatePlaylist(dict, artist, song) {
  return dict[artist] = song
}

function removeFromPlaylist(dict, artist) {
  return delete dict[artist];
}
