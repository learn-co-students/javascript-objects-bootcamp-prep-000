
var playlist = {}
playlist.Raymond = 'classical'
playlist['Kelly'] = 'forever in love'



function updatePlaylist(playlist, artist, song) {
  playlist[artist]= song
  return playlist


}

updatePlaylist(playlist,'shawn', 'still i rise')
console.log(playlist)



function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}


removeFromPlaylist(playlist,'Taylor')

 var recipe = {flour: '1 cup', eggs: 2, sugar: '4 cups'}
 delete recipe.eggs
 recipe

 var sugar = 'sugar'
 delete recipe[sugar]
 recipe
