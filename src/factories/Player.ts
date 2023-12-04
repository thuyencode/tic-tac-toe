import { Mark } from '../libs/types'

export function Player(mark: Mark) {
  let score = 0

  const getScore = () => score

  const addOneScore = () => {
    score++
  }

  const resetScore = () => {
    score = 0
  }

  return { mark, getScore, addOneScore, resetScore }
}
