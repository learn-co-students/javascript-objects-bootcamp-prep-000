var playlist = {"My Bloody Valentine":"Sometimes","Slowdive":"Alison"}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist [artistName] = "Phil Ochs"
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
 }
  