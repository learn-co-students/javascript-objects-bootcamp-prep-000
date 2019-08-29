var playlist = new Object({"Sting": "Fields of Gold"});

function updatePlaylist (playlistObj, newArtist, newSong) {
  playlistObj[newArtist] = newSong;
  return playlistObj;
}

function removeFromPlaylist(playlistObj, artistName) {
  delete playlistObj[artistName];
  return playlistObj;
}