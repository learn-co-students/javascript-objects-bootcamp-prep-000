var playlist = {
  cats: "meow",
  dogs: "bark",
  cows: "moo"
};
function updatePlaylist(playlist,artist,song){
  return Object.assign({},playlist, {[artist]: song})
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}