let playlist = {
  "artistName": "songTitle",
};
 const updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
  return playlist;
};
 const removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
};