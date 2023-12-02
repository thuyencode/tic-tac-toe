import { describe, expect, test } from 'bun:test'
import { TicTacToe } from '../TicTacToe'

describe('Unit tests for Board.ts', () => {
  test('Should get the correct winner', () => {
    const game = TicTacToe('X', 'O')

    expect(game.board.getWinner()).toBeUndefined()

    game.player1.setMove(0)
    game.player2.setMove(1)
    game.player2.setMove(2)
    game.player1.setMove(3)
    game.player2.setMove(4)
    game.player2.setMove(5)
    game.player1.setMove(6)
    game.player2.setMove(7)
    game.player2.setMove(8)

    expect(game.board.getWinner()).toEqual('X')
    expect(game.player1.isWinner()).toBeTrue()
    expect(game.player2.isWinner()).toBeFalse()
  })

  test("Both players' scores and rhe board can be changed and reset", () => {
    const game = TicTacToe('X', 'O')
    const originalBoard = game.board.getBoard()

    expect(game.player1.getScore()).toBe(0)
    expect(game.player2.getScore()).toBe(0)
    expect(game.board.getWinner()).toBeUndefined()

    game.player1.setMove(0)
    game.player2.setMove(1)
    game.player2.setMove(2)
    game.player1.setMove(3)
    game.player2.setMove(4)
    game.player2.setMove(5)
    game.player1.setMove(6)
    game.player2.setMove(7)
    game.player2.setMove(8)
    game.player1.addOneScore()
    game.player2.addOneScore()

    expect(game.player1.getScore()).toBe(1)
    expect(game.player2.getScore()).toBe(1)
    expect(game.board.getBoard()).toStrictEqual([
      'X',
      'O',
      'O',
      'X',
      'O',
      'O',
      'X',
      'O',
      'O'
    ])

    game.resetAll()

    expect(game.player1.getScore()).toBe(0)
    expect(game.player2.getScore()).toBe(0)
    expect(game.board.getBoard()).toStrictEqual(originalBoard)
  })
})
