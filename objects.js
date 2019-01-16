var playlist = { 
  artistName: "My Bloody Valentine",
  songTitle: "zodgilla"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName]
  return playlist
}