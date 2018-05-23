var playlist = {
};

function updatePlaylist(list, artist, title){
  list[artist] = title;
  return playlist;
}

function removeFromPlaylist (list, artist){
  delete list[artist];
}

updatePlaylist(playlist, 'bob', "johnny sings");

console.log(playlist);