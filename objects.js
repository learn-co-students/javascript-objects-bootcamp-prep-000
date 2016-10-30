var playlist = new Object({Kanye: 'Gold Digger',
                            'Frank Sinatra': 'My Way'});

function updatePlaylist(list, artistName, songTitle){
  list[artistName] = songTitle;
  return list;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
