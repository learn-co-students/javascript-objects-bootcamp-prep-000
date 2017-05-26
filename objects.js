var meals = {};
var meals = new Object() ;
var meals  = {breakfast: "oatmeal" } ;
var meals = new Object ({ breakfast: 'oatmeal'});
var playlist = {BillyJoel: 'I Love You Just The Way You Are' };
function updatePlaylist(play_list, artistName, songTitle) {
  play_list[artistName] = songTitle;
  return play_list;
}
function removeFromPlaylist(play_list, artistName) {
  delete play_list[artistName];
  return play_list;
}
