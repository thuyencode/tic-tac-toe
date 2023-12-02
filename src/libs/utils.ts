import { SLOTS_COUNT } from './constants'

/**
 * Generates a random move from 0 to 8.
 *
 * @return {number} The randomly generated move.
 */
export function getRandomMove() {
  return Math.floor(Math.random() * SLOTS_COUNT)
}
