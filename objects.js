var playlist = new Object();
playlist.swift = 'bad blood';
function updatePlaylist(list, artist, song) {
  list[artist]=song;
  return list;
}
function removeFromPlaylist(list, artistName) {
  delete list[artistName];
  return list;

}
