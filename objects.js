var playlist = {
  queen: "bohemian rhapsody",
  aliceMerton: "i have no roots",
  misterFelipe: "fuera perro"
};
function updatePlaylist (playlist, artist, song){
 return object.assign (playlist, {michaelJackson: "Thriller"});
};
function removeFromPlaylist (playlist, artist, song){
  return delete playlist.misterFelipe;
}
console.log(playlist);
console.log(updatePlaylist);
console.log (removeFromPlaylist); 
console.log(playlist); 
