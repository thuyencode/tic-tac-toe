import 'iconify-icon'

const closeAlertBtn = document.querySelector<HTMLButtonElement>(
  'button[data-hs-remove-element="#error-alert"]'
)

setTimeout(() => closeAlertBtn!.click(), 3000)
