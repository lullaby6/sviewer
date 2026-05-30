<script setup>

import { IconRotateClockwise } from '@tabler/icons-vue';

import Button from '@/components/Button.vue';
import { rotateClockwise } from '@/stores/images.js';
import { tooltip } from '@/shortcuts.js';

</script>

<template>
    <Button @click="rotateClockwise" v-tooltip="tooltip('rotateClockwise')">
        <IconRotateClockwise stroke={2} class="w-6" />
    </Button>
</template>
