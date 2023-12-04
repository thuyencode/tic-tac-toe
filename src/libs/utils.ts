import { HSOverlay } from 'preline'

export function getRandomMove(emptySlots: Array<number>) {
  return emptySlots[Math.floor(Math.random() * emptySlots.length)]
}

export function stringToHTML<T extends Element = Element>(str: string) {
  return new DOMParser().parseFromString(str, 'text/html').body.children[0] as T
}

export function showModal(selector: string, message: string) {
  const modalEle = document.querySelector<HTMLElement>(selector)
  const modalMessageEle =
    modalEle!.querySelector<HTMLSpanElement>('.modal-message')

  modalMessageEle!.innerHTML = message

  HSOverlay.open(modalEle!)

  setTimeout(() => {
    HSOverlay.close(modalEle!)
  }, 3000)
}
