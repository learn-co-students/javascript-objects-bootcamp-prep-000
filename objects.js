var playlist = {
  artistName: "songTitle"
};


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
};

function removeFromPlaylist(object, artistName) {
  delete object[artistName]
  return object
};
