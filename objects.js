
var playlist = { artistName: 'SongTitle' };

function updatePlaylist(list, artist, song) {
  list[artist] = song
  return list
}

function removeFromPlaylist(list, artist) {
  delete list[artist]
  return list
}