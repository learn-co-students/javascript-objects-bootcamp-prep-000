var playlist={Jimi_Hendrix:'Hey Joe'};

function updatePlaylist(object,artist,song){
object[artist]=song;
  return object;}
  
  function removeFromPlaylist(object,artist){
    delete object[artist];
    return object;}

console.log(updatePlaylist(playlist,'Ravel','Jou D\'eaux'));