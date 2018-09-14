var playlist = { Jawbox: "FF=66" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
    return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}

/*var playlist = { Jawbox: "Savory" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
*/
