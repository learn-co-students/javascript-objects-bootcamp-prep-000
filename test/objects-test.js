/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('objects', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
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
      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        to.eql({})
    })
  })
})
