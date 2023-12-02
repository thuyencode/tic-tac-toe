import { Mark } from '../libs/types'
import { Board } from './Board'
import { Player } from './Player'

/**
 * Creates a TicTacToe game with two players.
 *
 * @param {Mark} mark1 - The mark for player 1.
 * @param {Mark} mark2 - The mark for player 2.
 * @return {Object} An object containing methods to interact with the game.
 */
export function TicTacToe(mark1: Mark, mark2: Mark) {
  /**
   * Creates a new extended object with the given mark based on {@link Player}.
   *
   * @param {Mark} mark The mark of the player.
   * @return {Object} An object containing existed and extended methods to interact with the player.
   */
  const createPlayer = (mark: Mark) => {
    const p = Player(mark)

    /**
     * Sets the specified mark at the given index on the board.
     *
     * @param {number} index - The index where the move will be set.
     * @return {string[]} The updated board after the move is set.
     */
    const setMove = (index: number) => {
      board.setMove(mark, index)

      return board.getBoard()
    }

    /**
     * Checks if the current player is the winner.
     *
     * @return {boolean} Returns `true` if the current player is the winner, `false` otherwise.
     */
    const isWinner = () => {
      if (board.getWinner() === mark) {
        return true
      }

      return false
    }

    return { setMove, isWinner, ...p }
  }

  /**
   * Resets the score of both players.
   */
  const resetScore = () => {
    player1.resetScore()
    player2.resetScore()
  }

  const board = Board(mark1, mark2)
  const player1 = createPlayer(mark1)
  const player2 = createPlayer(mark2)

  return { board, player1, player2, resetScore }
}
