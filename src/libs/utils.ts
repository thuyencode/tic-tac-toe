import { HSOverlay } from 'preline'

export function getRandomMove(emptySlots: number[]): number {
  return emptySlots[Math.floor(Math.random() * emptySlots.length)]
}

export function stringToHTML<T extends Element = Element>(str: string): T {
  return new DOMParser().parseFromString(str, 'text/html').body.children[0] as T
}

export function showModal(selector: string, message: string): void {
  const modalEle = document.querySelector<HTMLElement>(selector)

  if (modalEle !== null) {
    const modalMessageEle =
      modalEle.querySelector<HTMLSpanElement>('.modal-message')

    if (modalMessageEle?.innerHTML !== undefined) {
      modalMessageEle.innerHTML = message
    }

    HSOverlay.open(modalEle)

    setTimeout(() => {
      HSOverlay.close(modalEle)
    }, 3000)
  }
}
