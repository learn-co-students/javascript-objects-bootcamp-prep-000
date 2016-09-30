var playlist = {
  missy: "freak on",
  nelly: "hot in here",
  rilo: "more adventurous",
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, key, value ) {
playlist[key] = value;
return playlist;
};

function removeFromPlaylist(playlist, artistName) {
delete playlist[artistName];
return playlist;
}
