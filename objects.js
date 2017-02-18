var playlist = {kanyeWest:"song"};

function updatePlaylist(playlistArg,artistNameArg,songTitleArg) {
      playlistArg[artistNameArg]=songTitleArg
      return playlistArg
}

function removeFromPlaylist(playlistArg, artistNameArg) {
  delete playlistArg[artistNameArg]
  return playlistArg
}

//return Object.assign({}, playlist, {[artistName]: songTitle})

//updatePlaylist(playlist, 'Florida', 'songanother')
