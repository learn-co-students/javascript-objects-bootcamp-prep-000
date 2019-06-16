var playlist = {};

playlist['Tom Waits'] = 'Clap Hands';
playlist['Nick Cave'] = 'Red Right Hand';
playlist['Talking Heads'] = 'Naive Melody';

function updatePlaylist(obj, key, value){
    obj[key] = value
    
    return obj
}

function removeFromPlaylist(obj, key){
  delete obj[key]
  
  return obj
  
}

