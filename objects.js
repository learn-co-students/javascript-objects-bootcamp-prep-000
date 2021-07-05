var playlist ={
  Queen: "Champions",
  LadyGaga: "Heloo",
  Prince:"Goodbye"
};
function updatePlaylist(list, artist, song){
  list[artist]=song
  return list;
}
function removeFromPlaylist (list, name){
  delete list.name;
  return list;
}