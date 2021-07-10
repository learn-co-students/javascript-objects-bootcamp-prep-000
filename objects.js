var playlist = { music: "song" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var newPlaylist = {artistName: "Gold Digger"}
  delete newPlaylist.artistName;
  return newPlaylist;
}