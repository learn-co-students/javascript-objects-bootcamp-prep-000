var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artistName, songTitle) {
  // Remember, because one of this function's arguments
  // is `playlist`, the `playlist` _inside_ the function
  // is not the same as the top-level `playlist` outside
  // the function
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
