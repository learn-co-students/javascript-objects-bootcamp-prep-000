var playlist = {
'Kendrick Lamar' : 'King Kunta',
YG : 'Toot it'
}

function updatePlaylist(playlist, artist, song)
{
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}
