import 'iconify-icon'
import { TicTacToe } from './factories/TicTacToe'
import { MARK_ICONS, SLOT_BTN_TEMPLATE } from './libs/constants'
import {
  computerScoreEle,
  nextMatchBtn,
  playerScoreEle,
  resetBtn,
  slotContainer
} from './libs/elements'
import { getRandomMove, showModal, stringToHTML } from './libs/utils'

const game = TicTacToe('X', 'O')

function updateUI() {
  const winningIndexes = game.board.getWinner()?.winningIndexes

  const btns = game.board.getBoard().map((slot, index) => {
    const btn = stringToHTML<HTMLButtonElement>(SLOT_BTN_TEMPLATE)

    if (slot !== '.') {
      switch (slot) {
        case 'X':
          btn.innerHTML = MARK_ICONS.X
          break

        case 'O':
          btn.innerHTML = MARK_ICONS.O
          break
      }

      if (winningIndexes.includes(index)) {
        btn.classList.add('highlight')
      }

      btn.disabled = true
    } else {
      btn.addEventListener('click', () => slotEventHandler(index))
    }

    return btn
  })

  slotContainer!.innerHTML = ''
  btns.forEach((btn) => slotContainer!.appendChild(btn))

  playerScoreEle!.textContent = `${game.player1.getScore()}`
  computerScoreEle!.textContent = `${game.player2.getScore()}`

  if (game.board.getEmptySlots().length === 0 && !game.board.getWinner().mark) {
    showModal(
      '#tie-modal',
      `<iconify-icon icon="noto:handshake" class="text-lg sm:text-xl"></iconify-icon> It's a tie`
    )
  } else if (game.player1.isWinner()) {
    showModal(
      '#win-modal',
      '<iconify-icon icon="noto:partying-face" class="text-lg sm:text-xl"></iconify-icon> You win'
    )
  } else if (game.player2.isWinner()) {
    showModal(
      '#lose-modal',
      '<iconify-icon icon="noto:loudly-crying-face" class="text-lg sm:text-xl"></iconify-icon> You lose'
    )
  }
}

function slotEventHandler(index: number) {
  try {
    const emptySlots = game.board.getEmptySlots()

    game.player1.setMove(index)

    if (emptySlots.length !== 0) {
      game.player2.setMove(getRandomMove(emptySlots))
    }
  } catch (error: any) {
    console.error(error)
    showModal('#error-modal', error.message)
  }

  updateUI()
}

resetBtn!.addEventListener('click', () => {
  game.resetAll()
  updateUI()
})

nextMatchBtn!.addEventListener('click', () => {
  game.board.resetBoard()
  updateUI()
})

updateUI()
