var playlist = {
  Christina: "Perri A Thousand Years",
  EdSheeran: "Thinking Out Loud",
  Rihanna: "Only Girl",
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;

}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;

}
