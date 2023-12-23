import type { Mark } from '../libs/types'
import { Board } from './Board'
import { Player } from './Player'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TicTacToe(mark1: Mark, mark2: Mark) {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const createPlayer = (mark: Mark) => {
    const p = Player(mark)

    const setMove = (index: number): void => {
      board.setMove(mark, index)

      if (isWinner()) p.addOneScore()
    }

    const isWinner = (): boolean => {
      if (board.getWinner().mark === mark) {
        return true
      }

      return false
    }

    return { setMove, isWinner, ...p }
  }

  const resetAll = (): void => {
    player1.resetScore()
    player2.resetScore()
    board.resetBoard()
  }

  const board = Board(mark1, mark2)
  const player1 = createPlayer(mark1)
  const player2 = createPlayer(mark2)

  return { board, player1, player2, resetAll }
}
