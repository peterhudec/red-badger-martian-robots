const sut = require('./index.js')

const trimLineWhiteSpace = s =>
  s.replaceAll(/^ +/gm, '')

test('', () => {
  expect(sut(trimLineWhiteSpace(`
    53
    11E RFRFRFRF
    32N FRRFLLFFRRFLL
    03W LLFFFLFLFL
  `))).toBe(trimLineWhiteSpace(`
    11E
    33NLOST
    23S
  `))
})
