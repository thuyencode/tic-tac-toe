import { describe, expect, test } from 'bun:test'
import { Player } from '../Player'

describe('Unit tests for Player.ts', () => {
  const MARK = 'X'

  test(`Player's score can be changed`, () => {
    const player = Player(MARK)

    expect(player.getScore()).toEqual(0)

    player.addOneScore()
    expect(player.getScore()).toEqual(1)

    player.resetScore()
    expect(player.getScore()).toEqual(0)
  })
})
