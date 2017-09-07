var playlist = {
  song 1: "song 1",
  song 2: "song 2",
  song 3: "song 3"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle })
  return playlist
}
