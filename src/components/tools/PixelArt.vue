<script setup>

import { IconBox, IconCube } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { pixelated } from '@/stores/images.js';

function togglePixelArt() {
    pixelated.value = !pixelated.value;
}

</script>

<template>
    <Button @click="togglePixelArt" v-tooltip="(pixelated ? 'Disable' : 'Enable') + ' Pixel Art'">
        <IconBox v-if="pixelated" stroke={2} class="w-6" />
        <IconCube v-else stroke={2} class="w-6" />
    </Button>
</template>
