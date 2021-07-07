
var playlist = {
  bruno_mars: ["Grenade","Uptown Funk!"],
  migos: ["T-Shirt","I Get The Bag"],
  drake: ["Best I Ever Had","One Dance"]
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
