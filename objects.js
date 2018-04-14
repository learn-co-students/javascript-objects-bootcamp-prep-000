var playlist = {
  mail: 'PRISTINE'
}
 let updatePlaylist = (playlist, artistName, songTitle)  =>{
   playlist[artistName] = songTitle;
   return playlist
 }
let removeFromPlaylist = (playlist, artistName) => {
 delete playlist[artistName]
 return playlist;

}
