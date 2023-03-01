const computePath = ({
  path,
  robotX,
  robotY,
  robotOrientation,
  worldW,
  worldH,
  scented,
}) => {
  let orientation = robotOrientation
  let x = robotX
  let y = robotY

  for (const move of path) {
    let candidateX = x
    let candidateY = y

    if (move === 'F') {
      switch (orientation) {
        case 'N':
          candidateY++
          break
        case 'S':
          candidateY--
          break
        case 'E':
          candidateX++
          break
        case 'W':
          candidateX--
          break
      }

      const candidateOutOfBounds
        = candidateX < 0
        || candidateY < 0
        || candidateX > worldW
        || candidateY > worldH

      const ignore = scented[x]?.[y]

      if (candidateOutOfBounds && !ignore) {
        return {
          x,
          y,
          orientation: 'LOST',
          scented: {
            [x]: {
              [y]: true,
            },
          },
        }
      }

      if (!ignore || !candidateOutOfBounds) {
        x = candidateX
        y = candidateY
      }
    } else {
      orientation ={
        N: {L: 'W', R: 'E'},
        S: {L: 'E', R: 'W'},
        E: {L: 'N', R: 'S'},
        W: {L: 'S', R: 'N'},
      }[orientation][move]
    }
  }

  return {x, y, orientation}
}

const martianRobots = input => {
}

module.exports = {
  computePath,
  martianRobots,
}
