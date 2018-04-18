var meals = {breakfast : 'oatmeal'}

var deserts = new Object({sweet : 'icecream'});

var drinks = {
  soda : 'Coke', 
  juice: 'apple',
  energy: 'redbull'
}

var make = "Honda"
var cars = {[make] : 'civic' }

var playlist = {artist: 'Song Title'}

function updatePlaylist(playlist, artistname, songtitle) {
  return playlist[artistname] = songtitle
}


function removeFromPlaylist(playlist, artistname) {
   delete playlist[artistname]
   return playlist
}