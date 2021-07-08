var playlist = {"Disco Biscuits": "Hot Air Baloon", "Phish" : "You Enjoy Myself", "String Cheese Incident" : "Howard"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}