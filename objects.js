var playlist = {
  ODESZA: "Echos",
  ['LCD SoundSystem']: "oh baby",
  ['Chet Faker']: "1998",
};


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
