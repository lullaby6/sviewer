<script setup>
import { ref, watch } from 'vue'

import { imageSources, imageIndex, imageRef, pixelated, scale, rotation, offset, zoomIn, zoomOut } from '@/stores/images.js';

const dragging = ref(false)

let startX = 0
let startY = 0
let startOffsetX = 0
let startOffsetY = 0

function dragStart(event) {
    dragging.value = true
    startX = event.clientX
    startY = event.clientY
    startOffsetX = offset.value.x
    startOffsetY = offset.value.y

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', dragEnd)
}

function handleMouseMove(event) {
    offset.value = {
        x: startOffsetX + (event.clientX - startX),
        y: startOffsetY + (event.clientY - startY),
    }
}

function dragEnd() {
    dragging.value = false
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', dragEnd)
}

function onWheel(event) {
    if (imageSources.value.length === 0) return

    if (event.deltaY < 0) zoomIn()
    else zoomOut()
}

function setImageRef(el) {
    imageRef.value = el
}

watch(imageIndex, () => {
    offset.value = { x: 0, y: 0 }
    scale.value = 1
    rotation.value = 0
})

</script>

<template>
    <div class="h-full bg-neutral-900 flex items-center justify-center overflow-hidden" @wheel.prevent="onWheel">
        <img
            :ref="setImageRef"
            v-if="imageSources.length > 0"
            :src="imageSources[imageIndex]"
            @mousedown.prevent="dragStart"
            :style="{
                transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) scale(${scale})`,
                cursor: dragging ? 'grabbing' : 'grab',
                imageRendering: pixelated ? 'pixelated' : 'auto',
                transition: dragging ? 'none' : 'all 0.2s ease',
            }"
            class="max-h-full sm:max-h-[90%] max-w-full object-contain select-none"
            draggable="false"
        >

        <span v-else class="text-neutral-500">No images</span>
    </div>
</template>
