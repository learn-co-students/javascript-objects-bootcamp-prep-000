var playlist = {
  Metallica: "Spit Out The Bone",
  ["Lacuna Coil"]: "Swamped",
  Delain: "Not Enough"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}