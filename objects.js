var playlist = { Rihanna: "Umbrella" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })

}