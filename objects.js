var playlist = {
  acdc: "Back in Black",
  thedoors: "Riders on the Storm",
  thomasrhett: "Die a Happy Man",
  lukebryan: "Huntin' and Fishin' and Lovin'"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}