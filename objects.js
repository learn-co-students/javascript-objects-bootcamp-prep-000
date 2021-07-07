var playlist = {'Ed Sheran': 'Shape of My Heart',
                'Shaggy': 'It Wasnt Me',
                'Micheal Jackson': 'Thiller'
};
function updatePlaylist(playlist,artistName,songTitle){
 playlist [artistName] = songTitle;
 return playlist;
}
function removeFromPlaylist(playlist, artistName){
delete playlist[artistName];
  return playlist;
}