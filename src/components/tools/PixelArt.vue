<script setup>

import { IconBox, IconCube } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { pixelated, togglePixelArt } from '@/stores/images.js';
import { keyHint } from '@/shortcuts.js';

</script>

<template>
    <Button @click="togglePixelArt" v-tooltip="(pixelated ? 'Disable' : 'Enable') + ' Pixel Art (' + keyHint('togglePixelArt') + ')'">
        <IconBox v-if="pixelated" stroke={2} class="w-6" />
        <IconCube v-else stroke={2} class="w-6" />
    </Button>
</template>
