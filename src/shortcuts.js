import {
    openImages,
    downloadImage,
    toggleFullScreen,
    togglePixelArt,
    reset,
    clear,
    next,
    prev,
    zoomIn,
    zoomOut,
    rotateClockwise,
    rotateCounterClockwise,
} from '@/stores/images.js'

export const shortcuts = {
    openImages:             { keys: ['n'],          label: 'Open Images',              run: openImages },
    downloadImage:          { keys: ['s'],          label: 'Download Image',           run: downloadImage },
    toggleFullScreen:       { keys: ['f'],          label: 'Fullscreen',               run: toggleFullScreen },
    togglePixelArt:         { keys: ['p'],          label: 'Pixel Art',                run: togglePixelArt },
    reset:                  { keys: ['r'],          label: 'Reset',                    run: reset },
    clear:                  { keys: ['c'],          label: 'Clear Images',             run: clear },
    next:                   { keys: ['ArrowRight'], label: 'Next',                     run: next },
    prev:                   { keys: ['ArrowLeft'],  label: 'Previous',                 run: prev },
    zoomIn:                 { keys: ['+', '='],     label: 'Zoom In',                  run: zoomIn },
    zoomOut:                { keys: ['-'],          label: 'Zoom Out',                 run: zoomOut },
    rotateClockwise:        { keys: ['h'],          label: 'Rotate Clockwise',         run: rotateClockwise },
    rotateCounterClockwise: { keys: ['g'],          label: 'Rotate Counter Clockwise', run: rotateCounterClockwise },
}

const KEY_LABELS = {
    arrowright: '→',
    arrowleft: '←',
    arrowup: '↑',
    arrowdown: '↓',
}

export function formatKey(key) {
    const lower = key.toLowerCase()
    if (KEY_LABELS[lower]) return KEY_LABELS[lower]
    return key.length === 1 ? key.toUpperCase() : key
}

export function keyHint(id) {
    const shortcut = shortcuts[id]
    return shortcut ? formatKey(shortcut.keys[0]) : ''
}

export function tooltip(id) {
    const shortcut = shortcuts[id]
    if (!shortcut) return ''
    return `${shortcut.label} (${formatKey(shortcut.keys[0])})`
}
