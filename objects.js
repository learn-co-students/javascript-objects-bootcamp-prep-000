var playlist = new Object({
    Slowdive: 'Alison',
    'My Bloody Valentine': 'Sometimes'
});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}

removeFromPlaylist(playlist, [Slowdive]);


/* if i want to add to a playlist non-destructively i can use the below code - tested & works in chrome web brower console

function updatePlaylist (playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle} );
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
*/