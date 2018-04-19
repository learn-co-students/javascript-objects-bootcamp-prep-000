var playlist = {'2pac' : 'Changes'}

function updatePlaylist(playlst, artistName, songTitle)
{
  playlst[artistName] = songTitle
  return playlst
}

function removeFromPlaylist(playlst, artistName, songTitle)
{
  delete playlst[artistName]
  return playlst
}