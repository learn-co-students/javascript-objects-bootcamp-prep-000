var playlist = new Object ();

playlist["Bruce Springsteen"] = "Born in the USA";

function updatePlaylist(list, artist, title) {
  list[artist] = title;
  
  return list;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}
