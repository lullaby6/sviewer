import { ref, computed } from 'vue'

export const imageSources = ref([])
export const imageNames = ref([])
export const imageIndex = ref(0)

export const currentName = computed(() => imageNames.value[imageIndex.value] ?? '')
export const imageRef = ref(null)
export const pixelated = ref(false)
export const scale = ref(1)
export const rotation = ref(0)
export const offset = ref({ x: 0, y: 0 })

const zoomValue = 0.25

export function addImages(files) {
    if (files.length === 0) return

    const index = imageSources.value.length
    for (const file of files) {
        imageSources.value.push(URL.createObjectURL(file))
        imageNames.value.push(file.name || 'pasted-image')
    }
    imageIndex.value = index
}

export function addImageURL(url) {
    const index = imageSources.value.length
    imageSources.value.push(url)
    imageNames.value.push(getNameFromURL(url))
    imageIndex.value = index
}

function getNameFromURL(url) {
    try {
        const pathname = new URL(url).pathname
        const name = decodeURIComponent(pathname.split('/').pop())
        return name || url
    } catch {
        return url
    }
}

export function prev() {
    if (imageSources.value.length === 0) return
    imageIndex.value = (imageIndex.value - 1 + imageSources.value.length) % imageSources.value.length
}

export function next() {
    if (imageSources.value.length === 0) return
    imageIndex.value = (imageIndex.value + 1) % imageSources.value.length
}

export function zoomIn() {
    scale.value = Math.min(scale.value + zoomValue, 50)
}

export function zoomOut() {
    scale.value = Math.max(scale.value - zoomValue, 0.25)
}

export function rotateClockwise() {
    rotation.value += 90
}

export function rotateCounterClockwise() {
    rotation.value -= 90
}

export function reset() {
    scale.value = 1
    rotation.value = 0
    offset.value = { x: 0, y: 0 }
    pixelated.value = false
}

export function clear() {
    imageSources.value = []
    imageNames.value = []
    imageIndex.value = 0
}