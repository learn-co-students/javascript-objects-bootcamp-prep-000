// objects defines an object called `playlist` containing at least one artist-song pair:

var playlist = { "DevilDriver": "Clouds Over California" }

// adds the `artistName: songTitle` key-value pair to `playlist`:
function updatePlaylist(playlist, artistName, songTitle)
{
  playlist[artistName] = songTitle
}

// removes `artistName` from `playlist`:
function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName]
}