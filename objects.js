var playlist = {
  kindo: "The Moments Inbetween",
  gavin: "Played By the Game",
  shikari: "Sorry You're Not a Winner",
  Kanye: "Gold Digger"
};

function updatePlaylist(list, artistName, songTitle){
  list[artistName] = songTitle;
  return list;
}

function removeFromPlaylist(list, artist){
  delete list[artist];
  return list;
}
