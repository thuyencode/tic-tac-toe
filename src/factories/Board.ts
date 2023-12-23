import { MARKS, SLOTS_COUNT } from '../libs/constants'
import type { Mark } from '../libs/types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Board(mark1: Mark, mark2: Mark) {
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const board = Array<string>(SLOTS_COUNT).fill('.')
  const emptySlots = Array.from(board.keys())

  const getBoard = (): string[] => board

  const isBoardFull = (): boolean => {
    for (const mark of board) {
      if (mark === '.') {
        return false
      }
    }

    return true
  }

  const getWinner = (): {
    mark: Mark | undefined
    winningIndexes: number[]
  } => {
    for (const mark of MARKS) {
      for (const pattern of WINNING_PATTERNS) {
        let win = true

        for (const index of pattern) {
          if (board[index] !== mark) {
            win = false
          }
        }

        if (win) {
          return { mark, winningIndexes: pattern }
        }
      }
    }

    return { mark: undefined, winningIndexes: [] as number[] }
  }

  const setMove = (mark: Mark, index: number): void => {
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
    emptySlots.splice(emptySlots.indexOf(index), 1)
  }

  const resetBoard = (): void => {
    board.fill('.')
    emptySlots.splice(0, emptySlots.length, ...Array.from(board.keys()))
  }

  const getEmptySlots = (): number[] => emptySlots

  return {
    getBoard,
    isBoardFull,
    getWinner,
    setMove,
    resetBoard,
    getEmptySlots
  }
}
