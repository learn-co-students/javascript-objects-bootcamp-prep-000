
var playlist ={
  
  Slowdive :'Alison',

  'My Bloody Valentine': 'Sometimes',
  'Phil Ochs': "Here's to the state of Mississippi"
  
  }
/*to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })*/
  function updatePlaylist ( playlist, artistName, SongTitle){
   playlist[artistName] = SongTitle;
  
     
   
    return playlist;
  }
 
   
 function removeFromPlaylist(playlist, artistName){
 delete playlist.Slowdive
 
 return true
   
  
  
}