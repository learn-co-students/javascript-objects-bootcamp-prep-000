var playlist = {
  artistName: "songTitle"
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist (object, propertie) {
  delete object[propertie]
  return object
}