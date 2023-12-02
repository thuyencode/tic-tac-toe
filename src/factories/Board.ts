import { Mark } from '../libs/types'

/**
 * Creates a new Board instance with the given marks.
 *
 * @param {Mark} mark1 The first mark to be used on the board.
 * @param {Mark} mark2 The second mark to be used on the board.
 * @return {Object} An object containing methods to interact with the board.
 */
export function Board(mark1: Mark, mark2: Mark) {
  const WINNING_PATTERNS = [
    '???......',
    '...???...',
    '......???',
    '?..?..?..',
    '.?..?..?.',
    '..?..?..?',
    '?...?...?',
    '..?.?.?..'
  ]

  const board = Array<string>(9).fill('.')

  const getBoard = () => board

  /**
   * Checks if the game board is full.
   *
   * @return {boolean} Returns true if the board is full, false otherwise.
   */
  const isBoardFull = () => {
    for (const mark of board) {
      if (mark === '.') {
        return false
      }
    }

    return true
  }

  /**
   * Find the winner of the game based on the current state of the board.
   *
   * @return {string} The mark of the winner, or `undefined` if there is no winner.
   */
  const getWinner = () => {
    for (const pattern of WINNING_PATTERNS) {
      const mark_1_pattern = board
        .join('')
        .replace(new RegExp(mark1, 'g'), '?')
        .replace(new RegExp(mark2, 'g'), '.')

      if (mark_1_pattern === pattern) {
        return mark1
      }

      const mark_2_pattern = board
        .join('')
        .replace(new RegExp(mark2, 'g'), '?')
        .replace(new RegExp(mark1, 'g'), '.')

      if (mark_2_pattern === pattern) {
        return mark2
      }
    }

    return undefined
  }

  /**
   * Sets the specified mark at the given index on the board.
   *
   * @param {Mark} mark The mark to be set. Must be either mark1 or mark2.
   * @param {number} index The index on the board where the mark will be set.
   * @throws {Error} If the mark is invalid.
   * @throws {Error} If the index is invalid.
   * @throws {Error} If the board is full and there are no empty slots.
   * @throws {Error} If the slot at the specified index is already occupied.
   */
  const setMove = (mark: Mark, index: number) => {
    if (mark !== mark1 && mark !== mark2) {
      throw new Error(`Mark ${mark} is invalid`)
    }

    if (index < 0 || index > board.length - 1) {
      throw new Error(`Index number ${index} is invalid`)
    }

    if (isBoardFull()) {
      throw new Error('There are no empty slots')
    }

    if (board[index] !== '.') {
      throw new Error(`Slot ${index} is already occupied`)
    }

    board[index] = mark
  }

  return { getBoard, isBoardFull, getWinner, setMove }
}
