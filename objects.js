var playlist =  {Nirvana: "The man who sold the world", "091": 'La canción del espantapájaros'};

function updatePlaylist ( playlist, name, title) {
  playlist[name] = title;
  return playlist;
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name];
  return playlist;
}