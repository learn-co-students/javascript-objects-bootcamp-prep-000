var playlist = {
  artistName: 'singsong',
};

function updatePlaylist(obj,name,title){
  obj[name]=title;
  return obj;
}
//updatePlaylist(playlist,'artistName','helloWorld');

function removeFromPlaylist(){
  delete playlist.artistName;
  return playlist;
}
//removeFromPlaylist();
