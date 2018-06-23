var playlist = {Slowdive:'Alison','My Bloody Valentine':'Sometimes'}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist,'Phil Ochs',"Here's To The State Of Mississippi")

function removeFromPlaylist(playlist,artistName) {
  delete playlist.Slowdive;
  return playlist;
}
