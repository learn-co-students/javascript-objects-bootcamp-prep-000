var playlist = {artist : "song title"}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign(playlist, artist, songTitle)
}
