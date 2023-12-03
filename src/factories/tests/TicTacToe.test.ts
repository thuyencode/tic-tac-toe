import { describe, expect, test } from 'bun:test'
import { TicTacToe } from '../TicTacToe'

describe('Unit tests for TicTacToe.ts', () => {
  test('Should get the correct winner and winning indexes', () => {
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

    expect(game.player1.isWinner()).toBeTrue()
    expect(game.player2.isWinner()).toBeFalse()
    expect(game.board.getWinningIndexes()).toStrictEqual([0, 3, 6])
  })

  test('Should throw error when there are no empty slots', () => {
    const game = TicTacToe('X', 'O')

    expect(() => {
      game.player1.setMove(0)
      game.player2.setMove(1)
      game.player2.setMove(2)
      game.player1.setMove(3)
      game.player2.setMove(4)
      game.player2.setMove(5)
      game.player1.setMove(6)
      game.player2.setMove(7)
      game.player2.setMove(8)
    }).not.toThrow()

    expect(() => {
      game.player2.setMove(8)
    }).toThrow('There are no empty slots')
  })

  test('Should throw error when a slot is already occupied', () => {
    const game = TicTacToe('X', 'O')

    expect(() => {
      game.player1.setMove(0)
      game.player2.setMove(0)
    }).toThrow('Slot 0 is already occupied')
  })

  test('Should throw error when a slot is out of bounds', () => {
    const game = TicTacToe('X', 'O')

    expect(() => {
      game.player1.setMove(-1)
    }).toThrow('Index number -1 is invalid')

    expect(() => {
      game.player2.setMove(9)
    }).toThrow('Index number 9 is invalid')
  })

  test('Should get the empty slots', () => {
    const game = TicTacToe('X', 'O')

    expect(game.board.getEmptySlots()).toStrictEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8
    ])

    game.player1.setMove(0)
    game.player2.setMove(1)
    game.player2.setMove(2)

    expect(game.board.getEmptySlots()).toStrictEqual([3, 4, 5, 6, 7, 8])

    game.player1.setMove(3)
    game.player2.setMove(4)
    game.player2.setMove(5)
    game.player1.setMove(6)
    game.player2.setMove(7)
    game.player2.setMove(8)

    expect(game.board.getEmptySlots()).toStrictEqual([])
  })

  test("Both players' scores and the board can be changed and reset", () => {
    const game = TicTacToe('X', 'O')
    const originalBoard = game.board.getBoard()

    expect(game.player1.getScore()).toBe(0)
    expect(game.player2.getScore()).toBe(0)

    game.player1.setMove(0)
    game.player2.setMove(1)
    game.player1.addOneScore()
    game.player2.addOneScore()

    expect(game.player1.getScore()).toBe(1)
    expect(game.player2.getScore()).toBe(1)
    expect(game.board.getBoard()).toStrictEqual([
      'X',
      'O',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.',
      '.'
    ])

    game.resetAll()

    expect(game.player1.getScore()).toBe(0)
    expect(game.player2.getScore()).toBe(0)
    expect(game.board.getBoard()).toStrictEqual(originalBoard)
  })
})
