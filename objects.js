var playlist = {
  artistName : "Bob"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(object, key) 
  {
    var index; // index of key
      for (var element in object) 
      {
          if(object.hasOwnProperty(element))
          {
              switch(typeof(object[element]))
                {
                  case 'string':
                      index = key.indexOf(element);
                      if(index > -1)
                         { delete object[element];}
                      break;
                      
                  case 'object':
                      index = key.indexOf(element);
                      if(index > -1)
                        { delete object[element]; }
                      else{
                            removeFromPlaylist(object[element], key);
                           }
                      break;
              }
      }
  }
  }
  