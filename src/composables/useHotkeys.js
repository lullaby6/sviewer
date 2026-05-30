import { onMounted, onBeforeUnmount } from 'vue'

import { shortcuts } from '@/shortcuts.js'

function isTyping(target) {
    if (!target || !target.closest) return false
    return !!target.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]')
}

export function useHotkeys() {
    function onKeyDown(event) {
        if (event.ctrlKey || event.metaKey || event.altKey) return
        if (isTyping(event.target)) return

        const key = event.key.toLowerCase()

        for (const shortcut of Object.values(shortcuts)) {
            if (shortcut.keys.some(k => k.toLowerCase() === key)) {
                event.preventDefault()
                shortcut.run()
                return
            }
        }
    }

    onMounted(() => window.addEventListener('keydown', onKeyDown))
    onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown))
}
