var playlist = {"Mariah Carey": "All I want for Christmast is You"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  return playlist = {}
}
