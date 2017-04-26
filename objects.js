var playlist={
  // this lists out the keys of artists and values of songs in a object called playlist, each artist can only have one song associated with them inside of an object.
  benFolds: 'Brick',
  wonderYears:'Came out Swinging',
  counterParts:'Choke'
};

function updatePlaylist(playlist,artistName,songTitle){
  // this says to add to object(playlist) the key(artistName)  the specified value(songTitle) and then return the new playlist
  playlist[artistName]=songTitle
  return playlist
};

function removeFromPlaylist(playlist,artistName){
  // this is supposed to say to delete from object(playlist) the key(artistName) to remove the key from the object
  delete playlist[artistName];
  return playlist
}
