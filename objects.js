var playlist = {
  "The XX": 'On Hold',
  "The Decemberists": 'I will follow you into the dark'
}

function updatePlaylist (playlist, MajorLazer, LeanOn) {
  playlist[MajorLazer] = 'Lean On'
  
  return playlist
}

function removeFromPlaylist(playlist,Slowdive) {
  delete playlist.Slowdive;
}
