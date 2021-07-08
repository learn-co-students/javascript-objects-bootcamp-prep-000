var playlist = new Object({
  ParquetCourts: "Human Nature",
  TheBlackKids: "I\'m not going to teach your boyfriend how to dance with you."
});

function updatePlaylist (a, b, c){
  a[b] = c;
}

function removeFromPlaylist(a, b){
  delete a[b];
}