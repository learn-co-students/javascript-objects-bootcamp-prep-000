var playlist = {
    benjaminGibbard: "You Remind Me Of Home",
    gesuNoKiwamiOtome: "Darumasan", 
    simonAndGarfunkel: "El Condor Pasa",
    theBeautifulSouth: "Good As Gold"
};


function updatePlaylist(playlist, artist, song) {

  return Object.assign ({}, playlist, { [artist]: song });

}


function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  
  return playlist;
}


