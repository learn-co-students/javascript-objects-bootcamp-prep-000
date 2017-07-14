var playlist = {

  Jackson: "they do not really care about us",
  Tkutya: "palinka szerelmem",
  funkyDonkey: "papagajbusz"
};
 function updatePlaylist(playlist, artist, title) {
   Object.assign(playlist[artist] = title);
   return playlist;
 }
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
