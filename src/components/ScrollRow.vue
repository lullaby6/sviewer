<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-vue'

const props = defineProps({
    maxVisible: {
        type: Number,
        default: 6
    }
})

const MOBILE_QUERY = '(max-width: 639.98px)'
const GAP_FALLBACK = 8
const HOLD_DELAY = 280
const BASE_SPEED = 8
const MAX_SPEED = 26
const ACCEL = 0.6

const viewport = ref(null)
const track = ref(null)

const isMobile = ref(typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false)
const maxWidth = ref(null)
const overflowing = ref(false)
const canLeft = ref(false)
const canRight = ref(false)

let mediaQuery = null
let resizeObserver = null
let rafId = null
let holdTimeout = null

function trackGap() {
    const t = track.value
    if (!t) return GAP_FALLBACK
    const styles = getComputedStyle(t)
    return parseFloat(styles.columnGap || styles.gap) || GAP_FALLBACK
}

function visibleChildren() {
    const t = track.value
    if (!t) return []
    return Array.from(t.children).filter(el => el.offsetWidth > 0)
}

function measure() {
    if (!isMobile.value) {
        maxWidth.value = null
        updateScrollState()
        return
    }

    const buttons = visibleChildren().slice(0, props.maxVisible)
    if (buttons.length === 0) {
        maxWidth.value = null
        updateScrollState()
        return
    }

    const gap = trackGap()
    let width = 0
    buttons.forEach((el, index) => {
        width += el.offsetWidth
        if (index > 0) width += gap
    })

    maxWidth.value = Math.ceil(width)
    nextTick(updateScrollState)
}

function updateScrollState() {
    const v = viewport.value
    if (!v || !isMobile.value) {
        overflowing.value = false
        canLeft.value = false
        canRight.value = false
        return
    }

    const maxScroll = v.scrollWidth - v.clientWidth
    overflowing.value = maxScroll > 1
    canLeft.value = v.scrollLeft > 1
    canRight.value = v.scrollLeft < maxScroll - 1
}

function stepSize() {
    const first = visibleChildren()[0]
    if (!first) return 64
    return first.offsetWidth + trackGap()
}

function pressStart(direction) {
    pressEnd()

    const v = viewport.value
    if (!v) return

    v.scrollBy({ left: direction * stepSize(), behavior: 'smooth' })

    let speed = BASE_SPEED
    holdTimeout = setTimeout(() => {
        const loop = () => {
            const el = viewport.value
            if (!el) return

            const before = el.scrollLeft
            el.scrollLeft = before + direction * speed
            speed = Math.min(speed + ACCEL, MAX_SPEED)
            updateScrollState()

            if (el.scrollLeft === before) {
                pressEnd()
                return
            }

            rafId = requestAnimationFrame(loop)
        }
        rafId = requestAnimationFrame(loop)
    }, HOLD_DELAY)
}

function pressEnd() {
    if (holdTimeout) {
        clearTimeout(holdTimeout)
        holdTimeout = null
    }
    if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
    }
    updateScrollState()
}

function onMediaChange(event) {
    isMobile.value = event.matches
    nextTick(measure)
}

onMounted(() => {
    mediaQuery = window.matchMedia(MOBILE_QUERY)
    isMobile.value = mediaQuery.matches
    mediaQuery.addEventListener('change', onMediaChange)

    resizeObserver = new ResizeObserver(() => measure())
    if (track.value) resizeObserver.observe(track.value)

    nextTick(measure)
})

onBeforeUnmount(() => {
    pressEnd()
    if (mediaQuery) mediaQuery.removeEventListener('change', onMediaChange)
    if (resizeObserver) resizeObserver.disconnect()
})
</script>

<template>
    <div class="flex items-center justify-between gap-2 w-full sm:w-auto sm:justify-center sm:gap-0">
        <button
            type="button"
            :disabled="!canLeft"
            class="sm:hidden shrink-0 select-none touch-none px-1 py-2 text-neutral-300 rounded cursor-pointer hover:opacity-50 transition-opacity disabled:cursor-not-allowed disabled:opacity-25"
            aria-label="Desplazar a la izquierda"
            @pointerdown.prevent="pressStart(-1)"
            @pointerup="pressEnd"
            @pointerleave="pressEnd"
            @pointercancel="pressEnd"
            @contextmenu.prevent
        >
            <IconChevronLeft :stroke="2" class="w-6" />
        </button>

        <div
            ref="viewport"
            class="overflow-hidden sm:overflow-visible flex-1 min-w-0 sm:flex-none"
            :style="isMobile && maxWidth ? { maxWidth: maxWidth + 'px' } : {}"
            @scroll="updateScrollState"
        >
            <div
                ref="track"
                class="flex items-center gap-2 sm:gap-4 flex-nowrap sm:flex-wrap sm:justify-center"
                :class="{ 'justify-center': !overflowing }"
            >
                <slot />
            </div>
        </div>

        <button
            type="button"
            :disabled="!canRight"
            class="sm:hidden shrink-0 select-none touch-none px-1 py-2 text-neutral-300 rounded cursor-pointer hover:opacity-50 transition-opacity disabled:cursor-not-allowed disabled:opacity-25"
            aria-label="Desplazar a la derecha"
            @pointerdown.prevent="pressStart(1)"
            @pointerup="pressEnd"
            @pointerleave="pressEnd"
            @pointercancel="pressEnd"
            @contextmenu.prevent
        >
            <IconChevronRight :stroke="2" class="w-6" />
        </button>
    </div>
</template>
