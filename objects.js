var playlist = {artist:'song'};

function updatePlaylist(pl, an, st) {
  pl[an] = st;
}

function removeFromPlaylist(pl, an){
  delete pl[an];
}