<script setup>

import { IconZoomOut } from '@tabler/icons-vue';


import Button from '@/components/Button.vue';
import { zoomOut } from '@/stores/images.js';
import { useHold } from '@/composables/useHold.js';

const { start, stop } = useHold(zoomOut);

</script>

<template>
    <Button @mousedown="start" @mouseup="stop" @mouseleave="stop">
        <IconZoomOut stroke={2} class="w-6" />
    </Button>
</template>
