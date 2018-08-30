var playlist = new Object();

playlist.artist = "Song Title" //can't have more than one title per artist

function updatePlaylist(list, artist, title) {
  list[artist] = title;
}

function removeFromPlaylist(list, artist) {
  delete list[artist]
}
