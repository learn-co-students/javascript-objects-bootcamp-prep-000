var playlist = new Object({Slowdive: 'Alison', 'My Bloody Valentine': 'Sometimes'});


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

*/
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

/*

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
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
}
removeFromPlaylist(playlist, "Slowdive")
console.log(playlist)
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