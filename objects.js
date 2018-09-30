var playlist = {
  Slowdive: "song 2",
  ["Phil Ochs"]: "song",
  ["My Bloody Valentine"]: "song 3"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}