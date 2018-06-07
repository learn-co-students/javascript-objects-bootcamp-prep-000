var playlist = new Object({Slowdive: 'Alison', MyBloodyValentine: 'Sometimes'});

function updatePlaylist (playlist, PhilOchs, songtitle)
{
  playlist[PhilOchs] = "Here's to the State of Mississippi"
  return playlist
}

function removeFromPlaylist (playlist, artistName)
{
  delete playlist.Slowdive;
  return playlist
}