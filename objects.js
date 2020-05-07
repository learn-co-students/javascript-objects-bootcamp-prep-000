var playlist = {"Phil Ochs": "My Bloody Valentine"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
 playlist = delete playlist[artistName];
}