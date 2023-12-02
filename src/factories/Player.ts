import { Mark } from '../libs/types'

/**
 * Creates a new player object with the given player mark.
 *
 * @param {Mark} mark The mark of the player.
 * @return {Object} The player object with `mark` and `getScore`, `addOneScore`, and `resetScore` methods.
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
