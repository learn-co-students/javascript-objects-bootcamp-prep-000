var meals = {breakfast: "oatmeal"};
meals.snack = 'yogurt'
console.log(meals.snack)

var playlist = {Kaskade:"Us"}

function updatePlaylist(playlistToUpdate, artist, song) {
  playlistToUpdate[artist] = song;
  return playlistToUpdate
}

function removeFromPlaylist(playlistToUpdate,artist) {
  delete playlistToUpdate[artist]
  return playlistToUpdate
}
console.log(updatePlaylist(playlist,"Zedd","True Colors"))
console.log(removeFromPlaylist(playlist,"Zedd"))