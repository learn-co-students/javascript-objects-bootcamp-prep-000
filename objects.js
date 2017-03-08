var playlist = {ACDC: "Back in Black", Metallica: "Enter Sandman", Sinatra: "Love and Marriage"
}
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;{
    return playlist
  }
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]; {
    return playlist
  }
}
