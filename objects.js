var playlist = new Object
({
  keys:'0'
  });
  
  function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName] = "songTitle";
    return playlist;
  }
  
  function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
    return playlist;
  }

/*
  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      removeFromPlaylist(playlist, 'Slowdive')

      expect(playlist).
        to.contain.all.keys({'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

      expect(playlist).
        not.to.have.all.keys({'Slowdive': 'Alison'})
    })
  })
})
*/
