var playlist = {kanye:"song"}

function updatePlaylist(playlistArg, artistName, songTitle) {
      playlistArg[artistName] = songTitle
      return playlistArg

}
function removeFromPlaylist(playlistArg, artistName) {
  delete playlistArg[artistName]
  return playlistArg
}

//return Object.assign({}, playlist, {[artistName]: songTitle})

//updatePlaylist(playlist, 'Florida', 'songanother')
