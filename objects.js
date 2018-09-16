/* var playlist = {
  Slowdive: "Alison",
  My Bloody Valentine: "Sometimes"
}

function updatePlaylist(playlist, artistName, SongTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
}

function removeFromPlaylist(playlist, artist) {
 return  delete playlist["Slowdive"]
} 

*/

 var playlist = {
  ledZeppelin: 'Stairway to Heaven'
};
 function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}
 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
} 