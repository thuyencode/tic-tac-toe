import { Mark } from '../libs/types'

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

  const isBoardFull = () => {
    for (const mark of board) {
      if (mark === '.') {
        return false
      }
    }

    return true
  }

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
  }

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
