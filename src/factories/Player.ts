import type { Mark } from '../libs/types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Player(mark: Mark) {
  let score = 0

  const getScore = (): number => score

  const addOneScore = (): void => {
    score++
  }

  const resetScore = (): void => {
    score = 0
  }

  return { mark, getScore, addOneScore, resetScore }
}
