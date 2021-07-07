playlist = {
  lcdSoundsystem: "Beat Connection",
  theCaliforniaHoneydrops: "A Higher Degree",
  glenMiller: "In The Mood",
  maceoPlex: "Solitary Daze"
};

function updatePlaylist(playlist, artist, track) {
  playlist[artist] = track;
  return playlist;
};

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
};
