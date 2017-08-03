var playlist = {
'Beyonce': 'Lemonade',
'Bruce Springsteen': 'Born To Run',
'Ice Cube': 'It Was A Good Day'
}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
   return Object.assign({}, playlist, { [artistName]:songTitle })
}

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
return playlist

}
