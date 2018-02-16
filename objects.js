let playlist = {
  kooks: 'bad habit',
  monkeys: '505',
  qotsa: 'no one knows',
  'the strokes': 'last nite'
};

function updatePlaylist (playlist, artist, song)
{
  playlist.artist = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist)
{
  delete playlist.artist;
  return playlist;
}