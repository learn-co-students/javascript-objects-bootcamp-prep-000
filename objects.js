var playlist = {Bono: "One" };
function updatePlaylist(playlist, artistName, songTitle) {
//  playlist = [Phil Ochs: "Here's to the State of Mississippi"];
  Object.assign(playlist, { [artistName]: songTitle });
  return playlist;
}
updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");
function removeFromPlaylist(playlist, artistName) {
  Object.assign(playlist, { Kanye: "Gold Digger" });
//  console.log(playlist); just wanted to see the output.
  delete playlist.Kanye;
  return playlist;
  }
removeFromPlaylist(playlist, 'Kanye');
