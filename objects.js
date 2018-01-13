var playlist = {
  artistName: "Phil Ochs",
  songTitle: "Here's to the State of Mississippi"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName], [songTitle]})
}
