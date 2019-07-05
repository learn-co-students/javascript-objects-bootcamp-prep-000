var playlist = {
  drake: "scorpion", lorde: "royals", joji: "midsummer madness"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}