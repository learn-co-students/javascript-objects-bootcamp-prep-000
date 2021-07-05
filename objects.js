var playlist = {joydivision: 'disorder', clash: 'london calling', smiths: 'how soon is now?'};

function updatePlaylist(playlist, artist, title){
  return Object.assign({}, playlist, {[artist]:title})
}

console.log(updatePlaylist(playlist, 'cocteau twins', 'heaven or las vegas'))

function removeFromPlaylist(playlist, artist) {
 delete playlist.artist;
 
 return playlist 
}

console.log(removeFromPlaylist (playlist, 'joydivision'))

