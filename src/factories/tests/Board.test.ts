import { describe, expect, test } from 'bun:test'
import { Board } from '../Board'

describe('Unit tests for Board.ts', () => {
  test('Should get the correct winner and winning indexes', () => {
    const board = Board('X', 'O')

    expect(board.getWinner()).toBeUndefined()

    board.setMove('X', 0)
    board.setMove('O', 1)
    board.setMove('O', 2)
    board.setMove('X', 3)
    board.setMove('O', 4)
    board.setMove('O', 5)
    board.setMove('X', 6)
    board.setMove('O', 7)
    board.setMove('O', 8)

    expect(board.getWinner()).toEqual('X')
    expect(board.getWinningIndexes()).toStrictEqual([0, 3, 6])
  })

  test('Should throw error when there are no empty slots', () => {
    const board = Board('X', 'O')

    expect(() => {
      board.setMove('X', 0)
      board.setMove('O', 1)
      board.setMove('O', 2)
      board.setMove('X', 3)
      board.setMove('O', 4)
      board.setMove('O', 5)
      board.setMove('X', 6)
      board.setMove('O', 7)
      board.setMove('O', 8)
    }).not.toThrow()

    expect(() => {
      board.setMove('O', 8)
    }).toThrow('There are no empty slots')
  })

  test('Should throw error when a slot is already occupied', () => {
    const board = Board('X', 'O')

    expect(() => {
      board.setMove('X', 0)
      board.setMove('O', 0)
    }).toThrow('Slot 0 is already occupied')
  })

  test('Should throw error when a slot is out of bounds', () => {
    const board = Board('X', 'O')

    expect(() => {
      board.setMove('O', -1)
    }).toThrow('Index number -1 is invalid')

    expect(() => {
      board.setMove('O', 9)
    }).toThrow('Index number 9 is invalid')
  })

  test('Should get the empty slots', () => {
    const board = Board('X', 'O')

    expect(board.getEmptySlots()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])

    board.setMove('X', 0)
    board.setMove('O', 1)
    board.setMove('O', 2)

    expect(board.getEmptySlots()).toStrictEqual([3, 4, 5, 6, 7, 8])

    board.setMove('X', 3)
    board.setMove('O', 4)
    board.setMove('O', 5)
    board.setMove('X', 6)
    board.setMove('O', 7)
    board.setMove('O', 8)

    expect(board.getEmptySlots()).toStrictEqual([])
  })
})
