var playlist = {artistName: "My Bloody Valentine", songTitle: "Sometimes"};
function updatePlaylist(playlist, artistName, songTitle) {
 playlist["Phil Ochs"] = "Slowdive";
    return playlist;
}
function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist["Slowdive"];
  return playlist;
}
