var playlist = {
  artistName: "songTitle"
 }


 function updatePlaylist (playlist, artistName, songTitle){
   return Object.assign({}, playlist, { [artistName]: songTitle })
 }

function removeFromPlaylist (playlist, artistName){
  delete playlist.obj[artistName]
  return playlist
}

/*
Object.assign({}, meals, { breakfast: ['oatmeal', 'banana'] })

> var obj = { 'not an identifier': 1, prop: 2 };
> Object.keys(obj)
[ 'not an identifier', 'prop' ]
> delete obj['not an identifier']
true
> Object.keys(obj)
[ 'prop' ]
*/
