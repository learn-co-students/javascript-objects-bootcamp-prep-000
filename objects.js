/** Declared playlist as a var object **/
var playlist = {
  billyJoel: "Piano Man"
}

/**
 * updatePlaylist function takes in a playlist object, artistName, and songTitle and assigns the playlist a new key value pair using
 * the artist name and song title
 **/
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign( playlist, {[artistName]: songTitle});
}

/**
 * removeFromPlaylist function takes in a playlist and artist's name and deletes the key denoted by the artist's name
 **/
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
