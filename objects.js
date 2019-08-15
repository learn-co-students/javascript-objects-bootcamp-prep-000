var playlist = {
  Madonna: 'LikeAVirgin',
  PhilCollins: 'AnotherDayinParadise',
  EltonJohn: 'CircleOfLife',
  MileyCirus: 'WreckingBall'
}

function updatePlaylist(playlist, key, value)
{
  playlist[key] = value
  return playlist
}

function removeFromPlaylist(playlist, key)
{
  delete playlist[key];
  return playlist
}