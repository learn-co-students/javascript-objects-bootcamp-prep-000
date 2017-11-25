var playlist = {Eagles: "Hotel California", Jackson: "Man in the Mirror"}

function updatePlaylist(pl, artist, song)
{
  pl[artist] = song;
  return pl;
}

function removeFromPlaylist(pl, artist)
{
  delete pl[artist];
  return pl;
}

