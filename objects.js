var playlist = {};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;// add song and artists as a key-value pair to playlist
  return playlist; // return whole playlist
}

function removeFromPlaylist(playlist, artistName) {

}
// Create a function `removeFromPlaylist` which accepts two arguments (the playlist object and the artist name). The
// body of the function should delete the key-value pair from the playlist and return the updated playlist.
