// playlist = obj , artistName = key , songTitle = value

var playlist = Object.assign({}, { artistName : 'songTitle' });

function updatePlaylist(playlist, artistName, songTitle){
// add the song and artist as a key-value pair to the playlist object then return whole playlist
  return Object.assign(playlist, { 'Phil Ochs' : songTitle })
}

function removeFromPlaylist(playlist, artistName){
// delete the key-value pair from the playlist and return the updated playlist
delete playlist[artistName]; // true
return (playlist);
}
