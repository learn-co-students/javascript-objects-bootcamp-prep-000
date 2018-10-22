var playlist = {
  'Bob Marley': 'One Love',
  'John Lennon': 'Imagine'
};

function updatePlaylist(object, artist, song) {
  object[artist] = song;
  return object;
}

function removeFromPlaylist(object, artist) {
  return delete object[artist];
}

/*
describe('objects', () => {
  const babelResult = babel.transformFileSync(
    path.resolve(__dirname, '..', 'objects.js'), {
      presets: ['es2015']
    }
  )
  jsdom({
    src: babelResult.code
  })

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