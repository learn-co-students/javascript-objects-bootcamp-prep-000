var playlist = {Muse: 'Something Human'};

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj,{ [artist]: song });
}

function removeFromPlaylist(obj, artist){
  delete playlist.artist;
  return playlist;
}
