var playlist = {Bubbles: "BubbleTime"}

var name = "Phil Ochs"
function updatePlaylist(playlist, name, title) {
  playlist["Phil Ochs"] = title
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist["Kanye"]
  return playlist
}
