<script setup>

import { IconZoomIn } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { zoomIn } from '@/stores/images.js';
import { useHold } from '@/composables/useHold.js';
import { tooltip } from '@/shortcuts.js';

const { start, stop } = useHold(zoomIn);

</script>

<template>
    <Button @mousedown="start" @mouseup="stop" @mouseleave="stop" v-tooltip="tooltip('zoomIn')">
        <IconZoomIn stroke={2} class="w-6" />
    </Button>
</template>
