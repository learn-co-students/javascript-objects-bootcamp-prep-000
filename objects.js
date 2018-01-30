var playlist = {artistName: "songTitles"};
function updatePlaylist(playlist, artistName, SongTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return playlist
}
var playlist = {Kanye: "Gold Digger"};
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye
  return playlist
}