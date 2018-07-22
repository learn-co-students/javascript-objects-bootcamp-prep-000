/* playlist can only store 1 song per artist as cannot store duplicate keys */

function updatePlaylist(playlistObject, artistName, songName) {
  return playlist.assign({}, playlistName, { artistName : songName });
}

function removeFromPlaylist(playlistObject, artistName) {
  delete playlistObject.artistName; 
}