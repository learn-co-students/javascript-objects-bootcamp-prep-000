var artistName = " ";
var songTitle = " ";
var playlist = {artistName: songTitle}; // confused about this initialization

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

/*function removeFromPlaylist(playlist, key) { //confused as to why it's not working when i put playlist in there. but anything else it works. I know the correct way of doing this thru Object assign, but still don't completely understand why this worked, but I'm going to submit this lesson anyway and move on to the next.
  delete playlist.artistName;
  return playlist;
}*/

function removeFromPlaylist(obj, key) {
  return Object.assign(delete obj.key);
  //return delete obj.key;
}
