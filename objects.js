var playlist = {'Lady Gaga': 'Bad Romance',
                'Madonna': 'Vogue',
                'Kanye': 'Gold Digger'
}

function updatePlaylist(object, artistName, songTitle) {
  //return Object.assign({}, playlist, {'Phil Ochs', "Here's to the State of Mississippi"})
  return Object.assign({}, object, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
//function removeFromPlaylist(object, name) {
  //console.log('going in', playlist)
//delete object.name;
//console.log('object', object);
//console.log('key', name);
  console.log('pre delete', playlist);
  console.log('key', artistName)
  delete playlist[artistName];
  console.log('post delete', playlist);


  return playlist;
}
