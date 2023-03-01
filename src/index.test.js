const sut = require('./index.js')

test('robotToDestination', () => {
  expect(sut.robotToDestination({
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

  expect(sut.robotToDestination({
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
    orientation: 'N',
    lost: true,
    scented: {
      3: {
        3: true,
      },
    },
  })

  expect(sut.robotToDestination({
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

test('robotsToDestinations', () => {
  expect(sut.robotsToDestinations({
    worldW: 5,
    worldH: 3,
    robots: [
      {
        robotX: 1,
        robotY: 1,
        robotOrientation: 'E',
        path: 'RFRFRFRF',
      },
      {
        robotX: 3,
        robotY: 2,
        robotOrientation: 'N',
        path: 'FRRFLLFFRRFLL',
      },
      {
        robotX: 0,
        robotY: 3,
        robotOrientation: 'W',
        path: 'LLFFFLFLFL',
      },
    ],
  })).toEqual([
    {
      x: 1,
      y: 1,
      orientation: 'E',
    },
    {
      x: 3,
      y: 3,
      orientation: 'N',
      lost: true,
    },
    {
      x: 2,
      y: 3,
      orientation: 'S',
    },
  ])
})