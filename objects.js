var playlist = {
  'Lupe Fiasco': 'Out Of My Head',
   Foals: 'Mountain At My Gates'
}

function updatePlaylist(playlist, artist, song)
{
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist)
{
  delete playlist[artist]
  return playlist
}
