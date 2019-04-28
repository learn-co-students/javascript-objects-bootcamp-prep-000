var playlist = {
  Beyonce:"Sorry",
  MichaelJackson:"Beat it",
  CelineDion:"All Night"
}; 

 function updatePlaylist(playlist,artistname,songtitle) {
  playlist[artistname]=songtitle 
};


function removeFromPlaylist(playlist,artistname) {
 delete playlist[artistname] 
};
removeFromPlayist(playlist,"CelineDion") 
playlist; 