/**
 * Returns a random move from the given array of empty slots.
 *
 * @param {Array<number>} emptySlots An array of numbers representing empty slots.
 * @return {number} A random number from the array of empty slots.
 */
export function getRandomMove(emptySlots: Array<number>) {
  return emptySlots[Math.floor(Math.random() * emptySlots.length)]
}
