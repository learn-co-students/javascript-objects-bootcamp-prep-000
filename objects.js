
var playlist = new Object ({artist: "song"});

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];   // alt way to . 
  return playlist; 
}

/*
  it('defines an object called `playlist` containing at least one artist-song pair', () => {
    expect(typeof playlist).to.equal('object')
    expect(Object.keys(playlist).length).to.be.greaterThan(0)
  })

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    before(() => {
      playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
    })

    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

      expect(playlist).
        to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })
  })
  
  */ 