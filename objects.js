var playlist = {
  artistName: 'Come and Get It'
};


function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  // delete playlist.artistName won't always work since there might be spaces in the artist name!
  delete playlist[artistName];
  return playlist;
}