var playlist = {
  Prince: "I Would Die 4 U",
  IndiaArie: "Brown Skin"
};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}