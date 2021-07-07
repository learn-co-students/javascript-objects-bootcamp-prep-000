var playlist = {
  'Dream Theater': 'Breaking All Illusions'
}

function updatePlaylist(list, artist, title) {
  list[artist] = title;
  return list
}

function removeFromPlaylist(list, artist) {
  delete list.artist
  return list
}