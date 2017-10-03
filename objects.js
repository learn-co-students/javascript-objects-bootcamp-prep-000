var playlist = {
  artistName: "Song titles"
};

/*objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName:
songTitle` key-value pair to `playlist`:*/
/* Create a function `updatePlaylist` which accepts three parameters: the
playlist (an object), an artist name (a string), and a song title. The body of
the function should add the song and artist as a key-value pair to the playlist
object. The function should return the whole playlist.*/
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

/*objects removeFromPlaylist(playlist, artistName) removes `artistName` from
`playlist`:*/
/*Create a function `removeFromPlaylist` which accepts two arguments
(the playlist object and the artist name). The body of the function should
delete the key-value pair from the playlist and return the updated playlist.*/
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
}
