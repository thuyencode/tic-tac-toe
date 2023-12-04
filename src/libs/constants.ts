export const MARKS = ['X', 'O'] as const

export const SLOTS_COUNT = 9

export const MARK_ICONS = {
  X: '<iconify-icon icon="healthicons:x"></iconify-icon>',
  O: '<iconify-icon icon="healthicons:o"></iconify-icon>'
} as const

export const SLOT_BTN_TEMPLATE = `
<button type="button" class="slot">
</button>
`
