var playlist = new Object({ Ariana: "Bed"});

function updatePlaylist(playlist, artist, title)
{
  playlist[artist] = title
  return playlist
}

function removeFromPlaylist(playlist, artist)
{
  delete playlist[artist]
  return playlist
}
