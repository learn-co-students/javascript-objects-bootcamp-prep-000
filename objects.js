//curly braces create an Object

var meals ={};

//object constructor
var meals = new Object();

/*you can initialize an object with key-value pairs when you create it*/

  var playlist = {
    artistName: 'Song Title'
  }
  
  function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
  }
  
  function removeFromPlaylist(playlist, artistName) {
   delete playlist [artistName]
    return playlist;
  }