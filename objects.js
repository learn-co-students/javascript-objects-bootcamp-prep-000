var playlist = {artist: song};

function updatePlaylist (artist, song) {
  Object.assign(playlist, { artist: [song] })
  return playlist{}
}
