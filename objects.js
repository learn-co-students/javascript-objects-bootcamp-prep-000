var playlist = {
  refused: "Shape of Punk to Come",
  takingBackSunday: "Where you want to be"
}

function updatePlaylist(obj, artistName, songTitle){
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj[artist];
  return obj;
}