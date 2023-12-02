import { Mark } from '../libs/types'

/**
 * Creates a new player object with the given player mark.
 *
 * @param {Mark} mark The mark of the player.
 * @return {Object} An object containing methods to interact with the player.
 */
export function Player(mark: Mark) {
  let score = 0

  /**
   * Returns the current score.
   */
  const getScore = () => score
  const addOneScore = () => {
    score++
  }
  /**
   * Resets the score to 0.
   */
  const resetScore = () => {
    score = 0
  }

  return { mark, getScore, addOneScore, resetScore }
}
