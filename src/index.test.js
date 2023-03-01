const sut = require('./index.js')

test('computePath', () => {

  expect(sut.computePath({
    robotOrientation: 'E',
    robotX: 1,
    robotY: 1,
    worldW: 5,
    worldH: 3,
    path: 'RFRFRFRF',
    scented: {},
  })).toEqual({
    x: 1,
    y: 1,
    orientation: 'E',
  })

  expect(sut.computePath({
    robotOrientation: 'N',
    robotX: 3,
    robotY: 2,
    worldW: 5,
    worldH: 3,
    path: 'FRRFLLFFRRFLL',
    scented: {},
  })).toEqual({
    x: 3,
    y: 3,
    orientation: 'LOST',
    scented: {
      3: {
        3: true,
      },
    },
  })

  expect(sut.computePath({
    robotOrientation: 'W',
    robotX: 0,
    robotY: 3,
    worldW: 5,
    worldH: 3,
    path: 'LLFFFLFLFL',
    scented: {
      3: {
        3: true,
      },
    },
  })).toEqual({
    x: 2,
    y: 3,
    orientation: 'S',
  })
})