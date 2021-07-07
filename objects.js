var playlist = { BritneySpears: "Toxic", Rihanna: "S&M" };

function updatePlaylist(object, artistname, songtitle) {
  playlist[artistname] = songtitle;
  return playlist;
}

function removeFromPlaylist(object, artistname) {
  delete playlist[artistname];
}